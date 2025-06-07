const poiName = "千岛湖-灯塔";

const address = "千岛湖灯塔";
const longitude = 119.143822;
const latitude = 29.604676;

const commodityType = 1;
const commodityId = 29;

const promise = fetch(
  "https://m.ctrip.com/restapi/soa2/16189/searchTripShootListForHomePageV2?_fxpcqlniredt=09031158113535278284&x-traceID=09031158113535278284-1731400047949-8864500",
  {
    headers: {
      accept: "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json",
      cookieorigin: "https://m.ctrip.com",
      priority: "u=1, i",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        'GUID=09031158113535278284; nfes_isSupportWebP=1; nfes_isSupportWebP=1; UBT_VID=1712933096353.e6ebTuvIzCwR; _RSG=hkaFROQu924p6FgAkutqWA; _RDG=282fc95473effb218e38483f3c934f3f94; _RGUID=4089e1a6-1b3e-4bab-a834-df8b8aa8f1b3; MKT_CKID=1681456989370.5fi17.f2l1; MKT_Pagesource=H5; _jzqco=%7C%7C%7C%7C1730278541090%7C1.1107464538.1730278540720.1730278628147.1730279310857.1730278628147.1730279310857.0.0.0.3.3; _abtest_userid=1b9a68aa-3241-4209-8ee2-bbac28b037c8; _ga=GA1.2.1362024494.1730691234; ibu_h5_site=CN; ibu_h5_group=ctrip; ibu_h5_local=zh-cn; ibu_h5_local=zh-cn; ibu_h5_lang=zhcn; ibu_h5_curr=CNY; Hm_lvt_37b54c42b9dde393e60c88c1a84657cb=1730898387; HMACCOUNT=6372A42594359CDF; Hm_lpvt_37b54c42b9dde393e60c88c1a84657cb=1730898410; cticket=DD84DCAD5517E4C16DDE5C49DA7F25699741B4C1CBA29616B2865B0FDE67DAC9; login_type=0; login_uid=999A5E38370D0BC8354DFE5D6012B3A3; DUID="u=392A1F20B2FBB750DB5A3560D96D53F1&v=0"; IsNonUser=F; AHeadUserInfo="VipGrade=0&VipGradeName=%C6%D5%CD%A8%BB%E1%D4%B1&UserName=&NoReadMessageCount=0"; Session=smartlinkcode=U135371&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=; Union=AllianceID=4899&SID=135371&OUID=&createtime=1731072818&Expires=1731677618000; _ga_5DVRDQD429=GS1.2.1731303745.14.0.1731303745.0.0.0; _ga_B77BES1Z8Z=GS1.2.1731303745.14.0.1731303745.60.0.0; _RF1=36.24.58.178; _resDomain=https%3A%2F%2Fbd-s.tripcdn.cn; librauuid=; _ubtstatus=%7B%22vid%22%3A%221712933096353.e6ebTuvIzCwR%22%2C%22sid%22%3A71%2C%22pvid%22%3A49%2C%22pid%22%3A0%7D; _pd=%7B%22_o%22%3A2%2C%22s%22%3A5%2C%22_s%22%3A1%7D; _bfa=1.1712933096353.e6ebTuvIzCwR.1.1731399753019.1731400047093.71.56.10650022759',
      Referer:
        "https://m.ctrip.com/webapp/you/tripshoot/paipai/poiPage/poiHome?poiId=143239667&poiType=3&isHideHeader=true&isHideNavBar=YES&seo=0&from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fyou%2Fgspoi%2Fsight%2F2249%2F143239667.html%3FpoiId%3D143239667%26seo%3D0%26isHideNavBar%3DYES",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    body: '{"groupChannelCode":"tourphoto_all","pagePara":{"pageIndex":1,"pageSize":200,"sortType":18},"levels":[1,2,3,4],"productTypes":[5],"imageCutType":1,"poiId":143239667,"poiType":3,"head":{"cid":"09031158113535278284","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"","xsid":"","extension":[{"name":"source","value":"web"},{"name":"technology","value":"H5"},{"name":"os","value":"IOS"},{"name":"application","value":""}]}}',
    method: "POST"
  }
).then(response => {
  if (response.status === 200) {
    return response.json();
  } else {
    return {};
  }
});

module.exports = {
  poiName,
  address,
  longitude,
  latitude,
  commodityType,
  commodityId,
  promise
};
