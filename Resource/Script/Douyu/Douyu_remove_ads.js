// 2024-07-28 21:56:40
const url = $request.url;
let obj = JSON.parse($response.body);

function removeAds(data, paths) {
    paths.forEach(path => {
        let current = data;
        const parts = path.split('.');
        for (let i = 0; i < parts.length - 1; i++) {
            if (!current[parts[i]]) break;
            current = current[parts[i]];
        }
        if (current && current[parts[parts.length - 1]]) {
            delete current[parts[parts.length - 1]];
        }
    });
}

function setKeysToZero(data, keys) {
    keys.forEach(key => {
        if (data[key] !== undefined) {
            data[key] = 0;
        }
    });
}

// 首页轮播图和视频流广告
if (url.includes("/mgapi/livenc/home/getRecV3")) {
    const paths = ["data.rec_cont", "data.rec_card.card_banner"];
    removeAds(obj, paths);
}

// 首页直播间悬浮窗
if (url.includes("/japi/entrance/roomRes/nc/m/list")) {
    const paths = ["data.pendant_a", "data.entrance_d"];
    removeAds(obj, paths);
}

// 修改配置文件
if (/\/venus\/config\/static\/update\?aid=ios&client_sys=ios&keyCodeSet=flow_config/.test(url)) {
    const keys = [
        "greatGodGameSitterSwitch", // 大神游戏陪玩
        "followMoreAnchorEntrance", // 关注更多主播入口
        "sdklivebanner", // 直播横幅
        "homeActFloatSwitch", // 首页活动悬浮窗
        "bringGoodsSwitch", // 带货开关
        "qqGameSwitch" // QQ游戏
    ];
    setKeysToZero(obj.data, keys);
}

$done({ body: JSON.stringify(obj) });