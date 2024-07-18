// 2024-07-19 07:55:52
const url = $request.url;

const processResponse = (regex, filterFunc) => {
    if (regex.test(url)) {
        let obj = JSON.parse($response.body);
        filterFunc(obj);
        $done({ body: JSON.stringify(obj) });
    } else {
        $done({});
    }
};

const filterNewcomerAndMall = obj => {
    obj.data?.home_type?.filter(item => item.name !== "新人" && item.name !== "新作"); // 首页标签
    obj.data?.home_feed?.filter(item => item.name !== "商城"); // 首页标签
};

const filterNoTraffic = obj => {
    obj.data?.confs?.filter(item => item.title !== "漫画商城" && item.title !== "超漫俱乐部" && item.title !== "看漫免流量"); // 我的页面
};

const filterNovelBanners = obj => {
    if (obj.data && obj.data.banners) {
        delete obj.data.banners; // 小说列表横幅
    }
};

processResponse(/\/twirp\/comic\.v\d\.Comic\/GetClassPageAllTabs/, filterNewcomerAndMall);
processResponse(/\/twirp\/user\.v\d\.User\/UCenterConf/, filterNoTraffic);
processResponse(/\/twirp\/novel\.v\d\.Home\/Home/, filterNovelBanners);
