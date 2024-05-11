// 2024-05-11 23:04:07
var json = JSON.parse($response.body);
var banner = json.pits[0];
banner.delivery_materials = "";
console.log(json);
$done({ body: JSON.stringify(json) });