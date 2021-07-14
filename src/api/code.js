// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 申请二维码
 * @param provinces
 * @returns {AxiosPromise}
 */
export const applyForCode = (provinces) => {
  return request({
    url: '/sysUser/productInvite',
    method: 'GET',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: {
      provinces
    }
  })
}

/**
 * 获取邀请码列表
 * @param current
 * @param pageSize
 * @param state
 * @returns {AxiosPromise}
 */
export const findInvitationCode = (current, pageSize, state) => {
  return request({
    url: '/invAuth/getAllInvCode',
    method: 'GET',
    params: {
      current,
      pageSize,
      state
    }
  })
}
