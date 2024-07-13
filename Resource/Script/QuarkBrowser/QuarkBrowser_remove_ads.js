// 2024-07-14 02:37:34
var json = JSON.parse($response.body);

// 删除指定的路径
var pathsToDelete = [
    "result.cms_user_center_bussiness_banner_config", // 用户中心 - 横幅广告
    "result.cms_user_center_welfare_farm_entry_config", // 用户中心 - 芭芭农场、福利中心
    "result.cms_cloud_drive_transport_header_banner", // 云盘 - 传输页面横幅广告
    "result.qk_novel_noah_sdk_slot_bottom_banner", // 小说 - 底部横幅广告
    "result.cms_novel_bookshelf_banner", // 小说 - 书架横幅
    "result.cms_bookmarkAndHistory_banner_ad", // 书签和历史 - 横幅广告
    "result.paisou_benefit_banner" // 拍搜 - 横幅广告
];

pathsToDelete.forEach(function(path) {
    var parts = path.split('.');
    var current = json;
    for (var i = 0; i < parts.length; i++) {
        if (i === parts.length - 1) {
            delete current[parts[i]];
        } else {
            current = current[parts[i]];
            if (!current) break;
        }
    }
});

$done({ body: JSON.stringify(json) });