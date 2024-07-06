// 2024-07-06 11:22:53
var json = JSON.parse($response.body);

// 删除签到内容
if (json.user.user_growth) {
    delete json.user.user_growth;
}

// 删除金融内容
if (json.finance_tab) {
    delete json.finance_tab;
}

if (json.namoaixud_entry) {
    delete json.namoaixud_entry;
}

if (json.zone_info) {
    delete json.zone_info;
}

if (json.banner) {
    delete json.banner;
}
if (json.duxiaoman_entry) {
    delete json.duxiaoman_entry;
}


if (json.custom_grid[12]) {
    delete json.custom_grid[12];
}

// 精简常用功能
// if (json.custom_grid[4]) {
//     delete json.custom_grid[4];
// }

// if (json.custom_grid[5]) {
//     delete json.custom_grid[5];
// }

// if (json.custom_grid[6]) {
//     delete json.custom_grid[6];
// }

// if (json.custom_grid[10]) {
//     delete json.custom_grid[10];
// }

// if (json.custom_grid[11]) {
//     delete json.custom_grid[11];
// }

// if (json.custom_grid[12]) {
//     delete json.custom_grid[12];
// }

// 删除小程序列表
if (json.recom_naws_list) {
    delete json.recom_naws_list;
}

if (json.recom_swan_list) {
    delete json.recom_swan_list;
}

// console.log(json);
$done({ body: JSON.stringify(json) });