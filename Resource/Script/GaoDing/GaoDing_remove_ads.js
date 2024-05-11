// 2024-05-11 22:56:07
var json = JSON.parse($response.body);
var banner = json.pits[0];
banner.delivery_materials = "";
$done({ body: JSON.stringify(json) });