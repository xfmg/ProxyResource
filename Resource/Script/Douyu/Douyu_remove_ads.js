// 2024-07-28 22:03:26
const url = $request.url;
let obj = JSON.parse($response.body);


if (url.includes("/mgapi/livenc/home/getRecV3")) {
    // 首页轮播图和视频流广告
    const clearAds = (items) => {
        items.forEach(item => {
            if (item.ad) {
                item.ad = {};
            }
        });
    };

    if (obj.data) {
        if (obj.data.rec_cont) {
            clearAds(obj.data.rec_cont);
        }
        if (obj.data.rec_card && obj.data.rec_card.card_banner) {
            clearAds(obj.data.rec_card.card_banner);
        }
    }
}

if (url.includes("/japi/entrance/roomRes/nc/m/list")) {
    // 首页直播间悬浮窗
    if (obj.data) {
        delete obj.data.pendant_a;
        delete obj.data.entrance_d;
    }
}

if (/^\/venus\/config\/static\/update\?aid=ios&client_sys=ios&keyCodeSet=flow_config$/.test(url)) {
    // 修改配置文件
    const keysToZero = [
        "greatGodGameSitterSwitch", // 大神游戏陪玩
        "followMoreAnchorEntrance", // 关注更多主播入口
        "sdklivebanner", // 直播横幅
        "homeActFloatSwitch", // 首页活动悬浮窗
        "bringGoodsSwitch", // 带货开关
        "qqGameSwitch" // QQ游戏
    ];
    if (obj.data) {
        keysToZero.forEach(key => {
            if (obj.data.hasOwnProperty(key)) {
                obj.data[key] = 0;
            }
        });
    }
}

$done({ body: JSON.stringify(obj) });
