// 2024-07-10 15:42:44
var json = JSON.parse($response.body);

// 移除热门企业列表
if (json.data) {
    delete json.data;
}

$done({ body: JSON.stringify(json) });