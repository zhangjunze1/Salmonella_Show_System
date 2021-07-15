// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 系统展示注册
 * @param name
 * @param password
 * @param password1
 * @param inviteCode
 * @returns {AxiosPromise}
 */
export const systemRegister = (name, password, password1, inviteCode) => {
  return request({
    url: '/sysUser/register',
    method: 'POST',
    params: {
      name,
      password,
      password1,
      inviteCode
    }
  })
}

/**
 * 登录展示系统
 * @param name
 * @param password
 * @returns {AxiosPromise}
 */
export const systemLogin = (name, password) => {
  return request({
    url: '/sysUser/login',
    method: 'POST',
    params: {
      name,
      password
    }
  })
}
