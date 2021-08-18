import Cookie from "js-cookie"
import { ACCOUNT } from "~/enums/account.enum";

export const state = () => ({
  token: null,
  role: null,
  userInfo: null
})

export const getters = {
  token: (state) => state.token,
  isAuthenticated: (state) => state.token != null,
  role: (state) => state.role,
  userInfo: (state) => state.userInfo
}

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  clearInfo (state) {
    state.token = null
    state.role = null
    state.userInfo = null
  },
  setRole (state, role) {
    state.role = role
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  }
}

export const actions = {
  login (vuexContext, payload) {
    // LOGIN DUMMY
    const accountInfo = ACCOUNT.find(user =>
      user.email === payload.email && user.password === payload.password)
    if (!accountInfo) return accountInfo

    // set account info
    vuexContext.commit("setToken", accountInfo.access_token)
    vuexContext.commit("setRole", accountInfo.role)
    vuexContext.commit("setUserInfo", accountInfo)

    // save cookie ( server )
    Cookie.set("nuxt_token", accountInfo.access_token)

    return accountInfo
  },

  logout (vuexContext) {
    vuexContext.commit("clearInfo")
    // remove token & expires [Cookie]
    Cookie.remove("nuxt_token")
    return true
  },
}
