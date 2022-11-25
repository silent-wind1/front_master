import {request} from "./request";


export function queryBlog(currPage) {
    return request({
        url: '/blog/all',
        method: 'get',
        params: {
            currPage: currPage,
        }
    })
}

export function blogCount() {
    return request({
        url: '/blog/count',
        method: "get"
    })
}