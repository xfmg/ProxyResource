// 2024-09-09 09:30:00
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/bds/feed/stream/v2/")) {
    // 遍历 data.data.cell_type 路径
    if (obj.data && obj.data.data && Array.isArray(obj.data.data)) {
        obj.data.data = obj.data.data.filter(item => {
            if (item.cell_type === 2) {
                console.log("删除 cell_type 为 2 的对象");
                return false;
            }
            return true;
        });
    }
}

if (url.includes("/bds/user/check_in/")) {
    // 遍历 data.profile_entrances.title 路径
    if (obj.data && obj.data.profile_entrances && Array.isArray(obj.data.profile_entrances)) {
        obj.data.profile_entrances = obj.data.profile_entrances.filter(item => {
            if (item.title === "放心借" || item.title === "洋钱罐借款") {
                console.log(`删除 title 为 ${item.title} 的对象`);
                return false;
            }
            return true;
        });
    }

    // 删除 data.pet_interface_message 路径
    if (obj.data && obj.data.pet_interface_message) {
        console.log("删除 pet_interface_message 路径");
        delete obj.data.pet_interface_message;
    }
}

$done({ body: JSON.stringify(obj) });