// 2024-07-06 23:06:39

var json = JSON.parse($response.body);

// 检查 URL 路径是否包含 /oc/exhibitions/template/resources
if ($request.url.includes("/oc/exhibitions/template/resources")) {
    // 移除 pits[0].delivery_materials
    if (json.pits && json.pits[0]) {
        delete json.pits[0].delivery_materials;
    }
    // 移除 pits[1].materials
    if (json.pits && json.pits[1]) {
        delete json.pits[1].materials;
    }
}

// 检查 URL 路径是否包含 /oc/exhibitions/app_mine/resources
if ($request.url.includes("/oc/exhibitions/app_mine/resources")) {
    // 移除 pits[2].delivery_materials
    if (json.pits && json.pits[2]) {
        delete json.pits[2].delivery_materials;
    }
}

$done({ body: JSON.stringify(json) });