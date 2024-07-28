// 2024-07-28 21:04:16
const url = $request.url;
let obj = JSON.parse($response.body);

// 首页轮播图和视频流广告
if (url.includes("/mgapi/livenc/home/getRecV3")) {
    if (obj.data && obj.data.rec_cont) {
        obj.data.rec_cont.forEach(item => {
            if (item.ad) {
                delete item.ad;
            }
        });
    }
}

if (url.includes("/japi/entrance/roomRes/nc/m/list")) {
    if (obj.data) {
        delete obj.data.pendant_a; // 直播间悬浮窗
        delete obj.data.entrance_d; // 直播间宝箱
    }
}

$done({ body: JSON.stringify(obj) });
