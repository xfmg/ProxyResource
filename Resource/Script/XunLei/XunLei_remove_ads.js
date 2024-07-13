// 2024-07-14 01:46:23
var json = JSON.parse($response.body);

// 删除我的云笔记、迅雷浏览器、迅雷TV、金融专区、迅雷快鸟
if (json.values && json.values.me_config && json.values.me_config.common_service_list && Array.isArray(json.values.me_config.common_service_list)) {
    var indicesToDelete = [0, 1, 2, 3, 4];
    indicesToDelete.forEach(function(index) {
        if (json.values.me_config.common_service_list[index]) {
            delete json.values.me_config.common_service_list[index];
        }
    });
}

// 删除迅雷小说
if (json.values && json.values.me_config && json.values.me_config.entrance_list && Array.isArray(json.values.me_config.entrance_list) && json.values.me_config.entrance_list[6]) {
    delete json.values.me_config.entrance_list[6];
}

// 删除云盘横幅
if (json.values && json.values.me_config && json.values.me_config.banner_service_list) {
    delete json.values.me_config.banner_service_list;
}

$done({ body: JSON.stringify(json) });