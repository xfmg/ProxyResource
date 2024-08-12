// 2024-08-12 20:27:34
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/site/icons")) {
    if (Array.isArray(obj)) {
        obj = obj.filter(item => item.icons && item.icons.title && !["直播", "周边商城"].includes(item.icons.title));
    }
}

$done({ body: JSON.stringify(obj) });