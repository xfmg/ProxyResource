// 2024-05-11 18:12:16
var banner = JSON.parse($response.body);
delete banner.pits[0].delivery_materials;
$done();