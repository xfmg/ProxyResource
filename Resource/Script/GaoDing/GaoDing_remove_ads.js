// 2024-07-06 22:16:46
var json = JSON.parse($response.body);

// 移除首页轮播图
for (var prop in json.pits[0]) {
    json.pits[0][prop] = "";
}

// 移除我的页面轮播图
var deliveryMaterials = json.pits[2].delivery_materials;
deliveryMaterials.forEach(function (material) {
    for (var prop in material) {
        material[prop] = "";
    }
});

$done({ body: JSON.stringify(json) });