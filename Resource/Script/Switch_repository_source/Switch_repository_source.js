/*
Loon专用
2024-04-21 00:58:51
*/
let githubPrefix = "https://raw.githubusercontent.com/luestr/ProxyResource/main"
let gitlabPrefix = "https://gitlab.com/lodepuly/vpn_tool/-/raw/master"
let gitbucketPrefix = "https://bitbucket.org/luestr/proxyresource/raw/main"

let changeTo = $persistentStore.read("仓库源")

var url = $request.url
var headers = $request.headers
delete headers.host
delete headers.Host

if (changeTo == "Bitbucket") {
    headers["host"] = "bitbucket.org"
} else if (changeTo == "GitLab") {
    headers["host"] = "gitlab.com"
} else {
    headers["host"] = "raw.githubusercontent.com"
}

if (headers["user-agent"]) {
    headers["user-agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0"
} else if (headers["User-Agent"]) {
    headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0"
}

if (url.startsWith(githubPrefix)) {
    if (changeTo == "Bitbucket") {
        url = url.replace(githubPrefix,gitbucketPrefix)
    } else if (changeTo == "GitLab") {
        url = url.replace(githubPrefix,gitlabPrefix)
    }
} else if (url.startsWith(gitlabPrefix)) {
    if (changeTo == "Bitbucket") {
        url = url.replace(gitlabPrefix,gitbucketPrefix)
    } else if (changeTo == "GitHub") {
        url = url.replace(gitlabPrefix,githubPrefix)
    }
} else if (url.startsWith(gitbucketPrefix)) {
    if (changeTo == "GitLab") {
        url = url.replace(gitbucketPrefix,gitlabPrefix)
    } else if (changeTo == "GitHub") {
        url = url.replace(gitbucketPrefix,githubPrefix)
    }
}

$done({url:url,headers:headers})