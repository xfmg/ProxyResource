// 2024-09-08 11:53:41
// 处理 /personalCenter/list 路径下的数据
if (url.includes("/personalCenter/list")) {
    if (obj.data && obj.data.modules) {
        obj.data.modules = obj.data.modules.filter(module => {
            if (module.moduleName === "Banner轮播") {
                console.log("删除 Banner轮播 模块");
                return false;
            }
            if (module.entrances) {
                module.entrances = module.entrances.filter(entrance => {
                    if (["度小满借钱", "免流量"].includes(entrance.name)) {
                        console.log(`删除 ${entrance.name} 入口`);
                        return false;
                    }
                    return true;
                });
            }
            return true;
        });
    }
}

// 处理 /tabs 路径下的数据
if (url.includes("/tabs")) {
    if (obj.data && obj.data.tabs) {
        obj.data.tabs = obj.data.tabs.filter(tab => {
            if (["直播", "短剧"].includes(tab.name)) {
                console.log(`删除 ${tab.name} 标签`);
                return false;
            }
            return true;
        });
    }
    if (obj.data && obj.data.tabsForSelect) {
        delete obj.data.tabsForSelect;
        console.log("删除 tabsForSelect 字段");
    }
}

// 处理 /dispatch 路径下的数据
if (url.includes("/dispatch")) {
    if (obj.data) {
        obj.data = obj.data.filter(item => {
            if (item.name === "猜你喜欢") {
                console.log("删除 猜你喜欢 模块");
                return false;
            }
            return true;
        });
    }
}

$done({ body: JSON.stringify(obj) });
