// 2024-07-18 17:49:22
const url = $request.url;
const body = $response.body;

if (!body) $done({});

let obj = JSON.parse(body);

if (url.includes("/Api/live/LiveList")) {
    delete obj.data.banners; // 首页 - 推荐 - 语聊横幅
} else if (url.includes("/api/live/FollowList")) {
    delete obj.data; // 首页 - 推荐 - 语聊关注推荐
} else if (url.includes("/Api/Friend/GetRecommendUsers")) {
    delete obj.data; // 首页 - 关注推荐
} else if (url.includes("/api/Union/HomeData")) {
    delete obj.data; // 消息 - 群聊推荐
}

$done({ body: JSON.stringify(obj) });
