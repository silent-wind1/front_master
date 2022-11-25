import Moment from "moment";

export function tsFormat(ts) {
    return Moment(ts).format("YYYY-MM-DD");
}


// 时间戳转换
export function formatDate(time) {
    let date = new Date(time)
    let year = date.getFullYear()  //获取年份
    let month = date.getMonth() + 1  //获取月份
    month = month < 10 ? "0" + month : month  //月份不满10天显示前加0
    let day = date.getDate()  //获取日期
    day = day < 10 ? "0" + day : day  //日期不满10天显示前加0
    //也可以获取更精准时间
    //let h = date.getHours(),                   //小时
    //let m = date.getMinutes(),                 //分
    //let s = date.getSeconds(),                 //秒
    //let ls = date.getMilliseconds()            //毫秒
    // console.log(time, date, year, month, day);
    return year + "-" + month + "-" + day
}
