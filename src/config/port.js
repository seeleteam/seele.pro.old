/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * 
 */

let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  // baseUrl = "http://seele.loc/api"
  // baseUrl = "http://bt.seele.pro/api"
  baseUrl = "https://admin.seele.pro/api"
} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = "http://bt.seele.pro/api"
  baseUrl = "https://admin.seele.pro/api"
}
export {
  baseUrl
}
