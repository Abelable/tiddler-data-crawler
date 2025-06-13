const poiName = "上江埠大桥";

const address = "上江埠大桥";
const longitude = 118.972862;
const latitude = 29.531046;

const productType = 1;
const productId = 67;

const promise = fetch("https://m.ctrip.com/restapi/soa2/16189/searchTripShootListForHomePageV2?_fxpcqlniredt=09031024215196387298&x-traceID=09031024215196387298-1749798707237-6044125", {
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
    "cookie": "GUID=09031024215196387298; nfes_isSupportWebP=1; nfes_isSupportWebP=1; UBT_VID=1748918743859.8183U6fZRwrv; Session=SmartLinkCode=youdao&SmartLinkKeyWord=&SmartLinkQuary=_UTF.&SmartLinkHost=note.youdao.com&SmartLinkLanguage=zh; _RSG=3fKfnru4LQDozWLWixSQz8; _RDG=28b9d5a658856020661f26930c39b1c155; _RGUID=d695138d-71a5-4a43-8f5a-73bb20560f72; MKT_Pagesource=H5; _ga=GA1.2.23443154.1749006895; _ubtstatus=%7B%22vid%22%3A%221748918743859.8183U6fZRwrv%22%2C%22sid%22%3A5%2C%22pvid%22%3A29%2C%22pid%22%3A%22214070%22%7D; ibu_h5_site=CN; ibu_h5_group=ctrip; ibu_h5_local=zh-cn; ibu_h5_local=zh-cn; ibu_h5_lang=zhcn; ibu_h5_curr=CNY; ibu_country=CN; Union=OUID=&AllianceID=4904&SID=353704&SourceID=55551833&AppID=&OpenID=&exmktID=&createtime=1749448641&Expires=1750053441987; Hm_lvt_77b03ea75ddaa8a6bf817822b2af25f1=1749448643; Hm_lpvt_77b03ea75ddaa8a6bf817822b2af25f1=1749448643; HMACCOUNT=E9EAD5344ACA2AEB; _gid=GA1.2.1930851960.1749546060; _RF1=240e%3A390%3A3d7%3A5fc0%3Abcbe%3A5825%3A9376%3Ad5dc; librauuid=; _resDomain=https%3A%2F%2Fws-s.tripcdn.cn; hotelhst=1164390341; _gat=1; _ga_5DVRDQD429=GS2.2.s1749798673$o13$g0$t1749798673$j60$l0$h0; _ga_B77BES1Z8Z=GS2.2.s1749798673$o13$g0$t1749798673$j60$l0$h0; _pd=%7B%22_o%22%3A3%2C%22s%22%3A5%2C%22_s%22%3A0%7D; _bfa=1.1748918743859.8183U6fZRwrv.1.1749798704693.1749798706869.19.22.10650022759",
    "Referer": "https://m.ctrip.com/webapp/you/tripshoot/paipai/poiPage/poiHome?poiId=24332613&poiType=3&isHideHeader=true&isHideNavBar=YES&seo=0&from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fyou%2Fsight%2F2249%2F1816209.html%3Fctm_ref%3Dch5_hp_bs_lst",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"groupChannelCode\":\"tourphoto_all\",\"pagePara\":{\"pageIndex\":1,\"pageSize\":200,\"sortType\":18},\"levels\":[1,2,3,4],\"productTypes\":[5],\"imageCutType\":1,\"poiId\":24332613,\"poiType\":3,\"head\":{\"cid\":\"09031024215196387298\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"xsid\":\"\",\"extension\":[{\"name\":\"source\",\"value\":\"web\"},{\"name\":\"technology\",\"value\":\"H5\"},{\"name\":\"os\",\"value\":\"Android\"},{\"name\":\"application\",\"value\":\"\"}]}}",
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


