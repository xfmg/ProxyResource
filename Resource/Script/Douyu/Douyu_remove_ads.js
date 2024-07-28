// 2024-07-28 22:03:26
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/mgapi/livenc/home/getRecV3")) {
    function removeAds(data) {
        if (data && Array.isArray(data)) {
            return data.filter(item => !item.ad);
        }
        return data;
    }

    if (obj.data && obj.data.rec_cont) {
        obj.data.rec_cont = removeAds(obj.data.rec_cont);
    }
    if (obj.data && obj.data.rec_card && obj.data.rec_card.card_banner) {
        obj.data.rec_card.card_banner = removeAds(obj.data.rec_card.card_banner);
    }
}

if (url.includes("/japi/entrance/roomRes/nc/m/list")) {
    if (obj.data) {
        delete obj.data.pendant_a; // 直播间悬浮窗
        delete obj.data.entrance_d; // 直播间宝箱
    }
}

if (/^\/venus\/config\/static\/update\?aid=ios&client_sys=ios&keyCodeSet=flow_config$/.test(url)) {
    const keysToZero = [
        "greatGodGameSitterSwitch", // 大神游戏陪玩
        "followMoreAnchorEntrance", // 关注更多主播入口
        "sdklivebanner", // 直播横幅
        "homeActFloatSwitch", // 首页活动悬浮窗
        "bringGoodsSwitch", // 带货开关
        "qqGameSwitch" // QQ游戏
    ];

    keysToZero.forEach(key => {
        if (obj.data && obj.data.hasOwnProperty(key)) {
            obj.data[key] = 0;
        }
    });
}

$done({ body: JSON.stringify(obj) });