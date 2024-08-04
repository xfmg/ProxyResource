// 2024-08-05 02:25:14
const url = $request.url;
// 移除功能入口角标
if (url.includes("/oc/exhibitions/templates/resources")) {
    let obj = JSON.parse($response.body);
    if (obj.pits && Array.isArray(obj.pits)) {
        obj.pits.forEach(pit => {
            if (pit.materials && Array.isArray(pit.materials)) {
                pit.materials.forEach(material => {
                    if (material.material && Array.isArray(material.material)) {
                        material.material.forEach(item => {
                            if (item.badge_img_url) {
                                item.badge_img_url = "";
                            }
                        });
                    }
                });
            }
        });
    }
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}