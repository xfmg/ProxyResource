// 2024-07-19 07:09:15
const url = $request.url;
const handlers = [
    {
        regex: /^\/twirp\/comic\.v\d\.Comic\/GetClassPageAllTabs$/,
        filters: {
            "home_type": "新人",
            "home_feed": "商城"
        }
    },
    {
        regex: /^\/twirp\/user\.v\d\.User\/UCenterConf$/,
        filters: {
            "confs": "看漫免流量"
        }
    }
];

const handler = handlers.find(h => h.regex.test(url));
if (handler) {
    processResponse(handler.filters);
} else {
    $done({});
}

function processResponse(filters) {
    let obj = JSON.parse($response.body);

    for (let key in filters) {
        if (obj.data && obj.data[key]) {
            obj.data[key] = obj.data[key].filter(item => item.name !== filters[key] && item.title !== filters[key]);
        }
    }

    $done({ body: JSON.stringify(obj) });
}
