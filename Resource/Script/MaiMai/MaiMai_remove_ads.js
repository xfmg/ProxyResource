// 2024-08-17 23:51:23
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/maimai/feed/v6/feed_detail_comment?")) {
    if (obj.lst && Array.isArray(obj.lst)) {
        obj.lst = obj.lst.filter(item => !item.hasOwnProperty("newAdStyle"));
    }
} else if (url.includes("/maimai/gossip/v3/gossip_detail_comment?")) {
    if (obj.comments && obj.comments.lst && Array.isArray(obj.comments.lst)) {
        obj.comments.lst = obj.comments.lst.filter(item => !item.hasOwnProperty("newAdStyle"));
    }
} else if (url.includes("/maimai/feed/v6/feed_detail_header?")) {
    if (obj.feed) {
        let styleIndex = 0;
        while (obj.feed.hasOwnProperty(`style${styleIndex}`)) {
            if (obj.feed[`style${styleIndex}`].link_card && (obj.feed[`style${styleIndex}`].link_card.type === 0 || obj.feed[`style${styleIndex}`].link_card.type === 3)) {
                delete obj.feed[`style${styleIndex}`];
            }
            styleIndex++;
        }
    }
} else if (url.includes("/maimai/feed/v5/focus_feed?")) {
    if (obj.feeds) {
        let styleIndex = 0;
        while (obj.feeds.hasOwnProperty(`style${styleIndex}`)) {
            if (obj.feeds[`style${styleIndex}`].link_card && (obj.feeds[`style${styleIndex}`].link_card.type === 0 || obj.feeds[`style${styleIndex}`].link_card.type === 3)) {
                delete obj.feeds[`style${styleIndex}`];
            }
            styleIndex++;
        }
    }
}

$done({ body: JSON.stringify(obj) });