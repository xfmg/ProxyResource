// 2024-07-06 22:43:04

var json = JSON.parse($response.body);

// 检查 URL 路径是否包含 /oc/exhibitions/template/resources
if ($request.url.includes("/oc/exhibitions/template/resources")) {
    // 移除 pits[0].delivery_materials
    if (json.pits && json.pits[0] && json.pits[0].delivery_materials) {
        json.pits[0].delivery_materials = [];
    }
    // 移除 pits[1]
    if (json.pits && json.pits[1]) {
        json.pits[1] = {};
    }
}

// 检查 URL 路径是否包含 /oc/exhibitions/app_mine/resources
if ($request.url.includes("/oc/exhibitions/app_mine/resources")) {
    // 移除 pits[2]
    if (json.pits && json.pits[2]) {
        json.pits[2] = {};
    }
}

$done({ body: JSON.stringify(json) });