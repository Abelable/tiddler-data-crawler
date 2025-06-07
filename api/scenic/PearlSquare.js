const poiName = "千岛湖珍珠广场";

const address = "千岛湖珍珠广场";
const longitude = 119.113993;
const latitude = 29.597461;

const productType = 1;
const productId = 53;

const promise = fetch("https://m.ctrip.com/restapi/soa2/16189/searchTripShootListForHomePageV2?_fxpcqlniredt=09031024215196387298&x-traceID=09031024215196387298-1749025945250-1574628", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "cookieorigin": "https://m.ctrip.com",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "GUID=09031024215196387298; nfes_isSupportWebP=1; nfes_isSupportWebP=1; Union=OUID=&AllianceID=4904&SID=353704&SourceID=55551833&createtime=1748918744&Expires=1749523543840; UBT_VID=1748918743859.8183U6fZRwrv; Session=SmartLinkCode=youdao&SmartLinkKeyWord=&SmartLinkQuary=_UTF.&SmartLinkHost=note.youdao.com&SmartLinkLanguage=zh; _RSG=3fKfnru4LQDozWLWixSQz8; _RDG=28b9d5a658856020661f26930c39b1c155; _RGUID=d695138d-71a5-4a43-8f5a-73bb20560f72; MKT_Pagesource=H5; _RF1=115.193.106.222; _ga=GA1.2.23443154.1749006895; _gid=GA1.2.166491962.1749006895; librauuid=; _ubtstatus=%7B%22vid%22%3A%221748918743859.8183U6fZRwrv%22%2C%22sid%22%3A5%2C%22pvid%22%3A29%2C%22pid%22%3A%22214070%22%7D; ibu_h5_site=CN; ibu_h5_group=ctrip; ibu_h5_local=zh-cn; ibu_h5_local=zh-cn; ibu_h5_lang=zhcn; ibu_h5_curr=CNY; ibu_country=CN; _resDomain=https%3A%2F%2Fbd-s.tripcdn.cn; hotelhst=1164390341; _pd=%7B%22_o%22%3A3%2C%22s%22%3A5%2C%22_s%22%3A0%7D; _bfa=1.1748918743859.8183U6fZRwrv.1.1749025943100.1749025944867.5.159.10650022759",
    "Referer": "https://m.ctrip.com/webapp/you/tripshoot/paipai/poiPage/poiHome?poiId=52189280&poiType=3&isHideHeader=true&isHideNavBar=YES&seo=0&from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fyou%2Fsight%2F2249%2F4664164.html%3Fctm_ref%3Dch5_hp_bs_lst",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"groupChannelCode\":\"tourphoto_all\",\"pagePara\":{\"pageIndex\":1,\"pageSize\":200,\"sortType\":18},\"levels\":[1,2,3,4],\"productTypes\":[5],\"imageCutType\":1,\"poiId\":52189280,\"poiType\":3,\"head\":{\"cid\":\"09031024215196387298\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"xsid\":\"\",\"extension\":[{\"name\":\"source\",\"value\":\"web\"},{\"name\":\"technology\",\"value\":\"H5\"},{\"name\":\"os\",\"value\":\"Android\"},{\"name\":\"application\",\"value\":\"\"}]}}",
  "method": "POST"
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
  productType,
  productId,
  promise
};


