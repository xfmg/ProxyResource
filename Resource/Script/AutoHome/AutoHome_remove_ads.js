// 2024-07-17 07:18:57
let url = $request.url;
let obj = JSON.parse($response.body);

// 删除社区广场 - 广告轮播图
if (/\/club_v\d+(?:\.\d+){2}\/club\/index\/businessv\d+/.test(url)) {
    delete obj.result.bannerlist;
}

// 删除选车 - 直播浮窗
if (url.includes("/carstreaming/selectcarportal/reclist") || url.includes("/carstreaming/selectcarportal/seriestopwithtagscard")) {
    delete obj.result.liveinfo;
    delete obj.result.toplist[1];
}

// 删除二手车 - 竖版轮播图
if (/apic\/v\d+\/gethomepagefeed/.test(url)) {
    delete obj.result.otherlist[0]; 
}

// 删除我的页面 - 移除添加我的爱车领券
if (/\/platform\/carserver\/carcard\/mycard\d+/.test(url)) {
    delete obj.result.nocartext;
}

// 遍历关键词删除所属对象
function removeItemsWithKeywords(data) {
    if (Array.isArray(data)) {
        data = data.filter(item => {
            return !item.text || !["低息借钱", "分期购车", "车主贷"].some(keyword => item.text.includes(keyword));
        });
    } else if (typeof data === 'object') {
        for (let key in data) {
            if (data[key] && typeof data[key] === 'object') {
                removeItemsWithKeywords(data[key]);
            }
        }
    }
}

if (/\/platform\/carserver\/((usercenter\/getservicecards)|(carcard\/(mycardv\d+|allcard)))/.test(url)) {
    removeItemsWithKeywords(obj);
}

$done({ body: JSON.stringify(obj) });
