/*
引用脚本https://raw.githubusercontent.com/toulanboy/scripts/master/ithome_ad/ithome_ad.js
脚本二改https://github.com/Keywos/rule/raw/main/JS/ithomes.js
*/
const isLoon = typeof $loon !== "undefined";
let url = $request.url,
  i = JSON.parse($response.body),
  FeedTypes = [10023], // 直播tip
  banner = true,
  tops = true,
  bannerAd = true;

if (isLoon) {
  bannerAd = $persistentStore.read("移除轮播图广告") === "开启";
  banner = $persistentStore.read("移除全部轮播图") === "开启";
  tops = $persistentStore.read("移除置顶项") === "开启";
} else if (typeof $argument !== "undefined" && $argument !== "") {
  let ins = {};
  try {
    ins = JSON.parse($argument);
  } catch (e) {}
  bannerAd = ins.bannerAd != 0;
  banner = ins.banner != 0;
  tops = ins.top != 0;
}

if (/api\/douyin\/GetLiveInfo/.test(url)) {
  if (i?.data) {
    i.data = "{}";
    i.success = true;
    i.showType = null;
    i.messageType = null;
  }
} else if (i?.data?.list) {
  if (bannerAd && !banner) {
    for (const Type of i.data.list) {
      if (Type.feedType == "10002") {
        Type.feedContent.focusNewsData = Type.feedContent.focusNewsData.filter(
          (i) => {
            return i.isAd === false; // 轮播图广告
          }
        );
        break;
      }
    }
  }
  banner && FeedTypes.push(10002); // 轮播
  tops && FeedTypes.push(10003); // 置顶
  i.data.list = i.data.list.filter((i) => {
    return (
      !FeedTypes.includes(i.feedType) &&
      !i.feedContent.smallTags?.[0]?.text?.includes("广告")
    );
  });

  // 新增部分：删除 feedType 为 10004 的数组项
  i.data.list = i.data.list.filter(item => {
    if (item.feedType === 10004) {
      return false; // 删除该数组项
    }
    return true; // 保留该数组项
  });
}

$done({ body: JSON.stringify(i) });

// prettier-ignore
function getin() { return Object.fromEntries($argument.split("&").map((i) => i.split("=")).map(([k, v]) => [k, decodeURIComponent(v)])); }