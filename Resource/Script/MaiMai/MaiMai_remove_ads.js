// 2024-08-17 23:35:34
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/maimai/feed/v5/focus_feed?")) {
    if (obj.feeds && Array.isArray(obj.feeds)) {
        obj.feeds = obj.feeds.filter(feed => !feed.newAdStyle); // 信息流大块广告
    }
} else if (url.includes("/maimai/gossip/v3/gossip_detail_comment?")) {
    if (obj.comments && obj.comments.lst && Array.isArray(obj.comments.lst)) {
        obj.comments.lst = obj.comments.lst.filter(comment => !comment.newAdStyle); // 评论区大块广告
    }
}

$done({ body: JSON.stringify(obj) });