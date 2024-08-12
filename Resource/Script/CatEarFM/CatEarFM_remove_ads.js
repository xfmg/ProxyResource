// 2024-08-12 22:21:49
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 首页标签
function filterIcons(icons) {
    return icons.filter(icon => icon.title !== "直播" && icon.title !== "周边商城");
}

function filterInfo(info, titlesToRemove) {
    return info.filter(item => !titlesToRemove.includes(item.title));
}

// 发现页面
if (url.includes("/site/icons")) {
    if (obj.info && obj.info.icons && Array.isArray(obj.info.icons)) {
        obj.info.icons = filterIcons(obj.info.icons);
    }
} else if (url.includes("/discovery/list")) {
    const titlesToRemove = ["直播间", "广播剧", "免流服务"];
    if (obj.info && Array.isArray(obj.info)) {
        obj.info = filterInfo(obj.info, titlesToRemove);
    }
}

$done({ body: JSON.stringify(obj) });