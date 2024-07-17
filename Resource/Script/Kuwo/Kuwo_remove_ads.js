// 2024-07-18 05:05:57
const url = $request.url;
const body = $response.body;

if (!body) $done({});

let obj = JSON.parse(body);

const pathRegex = /\/openapi\/v\d\/tingshu\/index\/radio/;
const typesToRemoveChild = ["banner", "stripAdvert"]; // 删除听书页面轮播图和横幅广告

if (pathRegex.test(url)) {
    function removeChildIfTypeMatches(obj) {
        if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                if (obj[key] && typeof obj[key] === 'object') {
                    if (typesToRemoveChild.includes(obj[key].type)) {
                        delete obj[key].child;
                    } else {
                        removeChildIfTypeMatches(obj[key]);
                    }
                }
            }
        }
    }

    removeChildIfTypeMatches(obj);
}

$done({ body: JSON.stringify(obj) });
