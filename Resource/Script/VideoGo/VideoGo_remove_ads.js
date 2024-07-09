// 2024-07-09 21:51:21

if ($request.url.includes("/valueadded/operation/config/master/station")) {
    var json = JSON.parse($response.body);

    // 删除 - 健康咨询
    if (json.stationInfo && json.stationInfo.groupList && json.stationInfo.groupList[1] && json.stationInfo.groupList[1].serviceList && json.stationInfo.groupList[1].serviceList[9] && json.stationInfo.groupList[1].serviceList[9].showInfo) {
        json.stationInfo.groupList[1].serviceList[9].showInfo = {};
    }

    // 删除 - 保险服务
    if (json.stationInfo && json.stationInfo.groupList && json.stationInfo.groupList[1] && json.stationInfo.groupList[1].serviceList && json.stationInfo.groupList[1].serviceList[10] && json.stationInfo.groupList[1].serviceList[10].showInfo) {
        json.stationInfo.groupList[1].serviceList[10].showInfo = {};
    }

    $done({ body: JSON.stringify(json) });
} else {
    $done({ body: $response.body });
}