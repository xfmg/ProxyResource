// 2024-07-06 20:11:29
var json = JSON.parse($response.body);

// 移除首页轮播图
if (json.pits && json.pits[0]) {
    delete json.pits[0];
}

// console.log(json);
$done({ body: JSON.stringify(json) });