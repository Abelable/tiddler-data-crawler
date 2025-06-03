// 天屿 - tianyu
// 骑龙巷 - qilongxiang
// 灯塔 - dengta
// 下姜村 - xiajiang
const {
  poiName,
  promise,
  commodityId,
  commodityType,
  address,
  latitude,
  longitude
} = require(`./api/scenic/zhongxin lake`);

// 需要临时更换
const ossConfig = {
  accessId: "LTAI5t93GDjDG8smVz2N6M23",
  host: "https://static.tiddler.cn",
  policy: "",
  signature: "",
  expire: 0,
  callback: "",
  dir: ""
};

async function updateOssConfig() {
  const response = await fetch(
    "https://api.tiddler.cn/api/V1/admin/oss_config"
  );
  const result = await response.json();
  if (result.code === 0) {
    ossConfig.policy = result.data.policy;
    ossConfig.signature = result.data.signature;
    ossConfig.expire = result.data.expire;
    ossConfig.callback = result.data.callback;
    ossConfig.dir = result.data.dir;
  } else {
    console.error("更新oss参数失败", result.message || result.statusText);
  }
}

updateOssConfig();

async function uploadFileToOSS(fileUrl) {
  try {
    const response = await fetch(fileUrl);

    const blob = await response.blob();

    const formData = new FormData();
    const fileUrlArr = fileUrl.split("?")[0].split("/");
    const fileName = `${fileUrlArr[fileUrlArr.length - 1]}`;
    formData.append("key", `${ossConfig.dir}${fileName}`);
    formData.append("success_action_status", "200");
    formData.append("x-oss-object-acl", "public-read");
    formData.append("x-oss-meta-fullname", fileName);
    formData.append("OSSAccessKeyId", ossConfig.accessId);
    formData.append("policy", ossConfig.policy);
    formData.append("signature", ossConfig.signature);
    formData.append("file", blob);

    // 发起请求上传到 OSS
    const uploadResponse = await fetch(ossConfig.host, {
      method: "POST",
      body: formData
    });

    if (uploadResponse.ok) {
      console.log("图片上传成功");
      return `${ossConfig.host}/${ossConfig.dir}${fileName}`;
    } else {
      console.error("图片上传失败", uploadResponse.statusText);
      updateOssConfig();
    }
  } catch (error) {
    console.error("图片上传出错:", error);
  }
}

promise.then(async data => {
  data.resultList
    .filter(item => item.article.poiName === poiName)
    .map(item => item.article)
    .map(async (item, index) => {
      setTimeout(async () => {
        const avatar = await uploadFileToOSS(
          item.author.coverImage.originalUrl
        );
        const nickname = item.author.nickName;
        const { data: userId } = await fetch(
          `https://api.tiddler.cn/api/v1/user/add_temp_user?avatar=${avatar}&nickname=${nickname}`
        ).then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return {};
          }
        });

        if (item.video) {
          const { coverImageUrl, videoUrl: video } = item.video;
          const cover = await uploadFileToOSS(coverImageUrl);
          const videoUrl = await uploadFileToOSS(video);
          fetch(
            `https://api.tiddler.cn/api/v1/media/short_video/create_temp_video`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams({
                userId,
                commodityId,
                commodityType,
                cover,
                videoUrl,
                title: item.articleTitle,
                address,
                latitude,
                longitude
              })
            }
          ).then(async response => {
            const result = await response.json();
            if ([200, 201, 204].includes(response.status)) {
              if (result.code === 0) {
                console.log("视频上传成功");
              } else {
                console.error(
                  "视频上传失败",
                  result.message || result.statusText
                );
              }
            } else {
              console.error(
                "视频上传失败",
                result.message || result.statusText
              );
            }
          });
        } else {
          const params = new URLSearchParams({
            userId,
            commodityId,
            commodityType,
            title: item.articleTitle,
            content: item.content,
            address,
            latitude,
            longitude
          });
          for (let i = 0; i < item.images.length; i++) {
            const image = await uploadFileToOSS(item.images[i].originalUrl);
            image && params.append("imageList[]", image);
          }
          fetch(
            `https://api.tiddler.cn/api/v1/media/tourism_note/create_temp_note`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: params
            }
          ).then(async response => {
            const result = await response.json();
            if ([200, 201, 204].includes(response.status)) {
              if (result.code === 0) {
                console.log("游记上传成功");
              } else {
                console.error(
                  "游记上传失败",
                  result.message || result.statusText
                );
              }
            } else {
              console.error(
                "游记上传失败",
                result.message || result.statusText
              );
            }
          });
        }
      }, 800 * index);
    });
});
