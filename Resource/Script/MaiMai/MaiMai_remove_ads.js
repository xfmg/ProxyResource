// 2024-08-17 01:48:25
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/maimai/feed/v6/feed_detail_comment?")) {
    // 遍历 lst 路径，如果存在 newAdStyle 键名，则删除当前 newAdStyle 所在的数组
    if (obj.lst) {
        obj.lst = obj.lst.filter(item => !item.hasOwnProperty("newAdStyle"));
    }
} else if (url.includes("/maimai/feed/v6/feed_detail_header?")) {
    // 遍历 feed.style1.link_card 路径，如果存在 link_card 键名，则删除当前 link_card 所在的数组
    if (obj.feed && obj.feed.style1 && obj.feed.style1.link_card) {
        obj.feed.style1.link_card = obj.feed.style1.link_card.filter(item => !item.hasOwnProperty("link_card"));
    }
} else if (url.includes("/maimai/feed/v5/focus_feed?")) {
    // 遍历 feeds.style1.link_card 路径，如果存在 link_card 键名，则删除当前 link_card 所在的数组
    if (obj.feeds && obj.feeds.style1 && obj.feeds.style1.link_card) {
        obj.feeds.style1.link_card = obj.feeds.style1.link_card.filter(item => !item.hasOwnProperty("link_card"));
    }
}

$done({ body: JSON.stringify(obj) });