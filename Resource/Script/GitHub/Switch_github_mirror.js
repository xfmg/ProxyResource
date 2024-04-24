/*
Loon专用
2024-04-21 01:29:51
*/
let githubPrefix = "https://raw.githubusercontent.com/"
let fastrawPrefix = "https://fastraw.ixnic.net/" //由FastGit群组成员 @duya1234567 提供
let hubinceptPrefix = "https://hub.incept.pw/" // 由FastGit群组成员 @mxe365 提供
// let kkgithubPrefix = "https://raw.kkgithub.com/" //由KGithub提供，暂时失效。

//1: fastraw.ixnic.net 2.hub.incept.pw 3.raw.kkgithub.com
let changeTo = $persistentStore.read("镜像源")

var url = $request.url
var headers = $request.headers
delete headers.host
delete headers.Host

if (!url.startsWith(githubPrefix)) {
    $done({});
    return;
}

if (changeTo == "fastraw.ixnic.net") {
    headers["host"] = "fastraw.ixnic.net"
    url = url.replace(githubPrefix,fastrawPrefix)
} else if (changeTo == "hub.incept.pw") {
    headers["host"] = "hub.incept.pw"
    url = url.replace(githubPrefix,hubinceptPrefix)
} else if (changeTo == "raw.kkgithub.com") {
    headers["host"] = "raw.kkgithub.com"
    url = url.replace(githubPrefix,kkgithubPrefix)
}

$done({url:url,headers:headers})