// 2024-07-19 07:21:07
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
    obj.data?.home_type?.filter(item => item.name !== "新人");
    obj.data?.home_feed?.filter(item => item.name !== "商城");
};

const filterNoTraffic = obj => {
    obj.data?.confs?.filter(item => item.title !== "看漫免流量");
};

processResponse(/^\/twirp\/comic\.v\d\.Comic\/GetClassPageAllTabs$/, filterNewcomerAndMall);
processResponse(/^\/twirp\/user\.v\d\.User\/UCenterConf$/, filterNoTraffic);
