// 2024-08-17 01:54:45
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/maimai/feed/v6/feed_detail_comment?")) {
    if (obj.lst && Array.isArray(obj.lst)) {
        obj.lst = obj.lst.filter(item => !item.hasOwnProperty("newAdStyle")); // 信息流广告
    }
} else if (url.includes("/maimai/gossip/v3/gossip_detail_comment?")) {
    if (obj.comments && obj.comments.lst && Array.isArray(obj.comments.lst)) {
        obj.comments.lst = obj.comments.lst.filter(item => !item.hasOwnProperty("newAdStyle")); // 信息流广告
    }
} else if (url.includes("/maimai/feed/v6/feed_detail_header?")) {
    if (obj.feed && obj.feed.style1 && Array.isArray(obj.feed.style1.link_card)) {
        obj.feed.style1.link_card = []; // 卡片广告
    }
} else if (url.includes("/maimai/feed/v5/focus_feed?")) {
    if (obj.feeds && obj.feeds.style1 && Array.isArray(obj.feeds.style1.link_card)) {
        obj.feeds.style1.link_card = []; // 卡片广告
    }
}

$done({ body: JSON.stringify(obj) });