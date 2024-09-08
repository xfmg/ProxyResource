// 2024-09-08 11:42:51
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/personalCenter/list")) {
    // 删除 moduleName 为 "Banner轮播" 的对象
    if (obj.data && obj.data.modules) {
        obj.data.modules = obj.data.modules.filter(module => module.moduleName !== "Banner轮播");
    }

    // 删除 entrances 中 name 为 "度小满借钱" 或 "免流量" 的对象
    if (obj.data && obj.data.modules) {
        obj.data.modules.forEach(module => {
            if (module.entrances) {
                module.entrances = module.entrances.filter(entrance => !["度小满借钱", "免流量"].includes(entrance.name));
            }
        });
    }
} else if (url.includes("/tabs")) {
    // 删除 name 为 "直播" 或 "短剧" 的对象
    if (obj.data && obj.data.tabs) {
        obj.data.tabs = obj.data.tabs.filter(tab => !["直播", "短剧"].includes(tab.name));
    }
}

$done({ body: JSON.stringify(obj) });
