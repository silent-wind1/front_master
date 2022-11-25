import {request} from "./request";

export function Admin_Login(username, password) {
  const data = {
    username, password
  }
  return request({
    url: '/admin/login/',
    method: 'post',
    data: data
  })
}
