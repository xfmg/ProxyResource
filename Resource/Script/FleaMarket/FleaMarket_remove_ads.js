// 2024-08-10 22:33:37
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/gw/mtop.taobao.idlehome.home.nextfresh")) {
    function traverseAndRemove(data, path, targetValue) {
        const keys = path.split('.');
        let current = data;
        for (let i = 0; i < keys.length; i++) {
            if (i === keys.length - 1) {
                if (current[keys[i]] === targetValue) {
                    return null;
                }
            } else {
                current = current[keys[i]];
                if (!current) break;
            }
        }
        return data;
    }

    obj = traverseAndRemove(obj, 'data.sections.template.name', 'fish_home_advertise_card_d4');
}

$done({ body: JSON.stringify(obj) });