import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  user: null
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    state.isAuthenticated = !!token
    if (token) {
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    }
  },
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/auth/login/', credentials)
      const { token, user } = response.data
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  },
  
  async logout({ commit }) {
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
  },
  
  async checkAuth({ commit, state }) {
    if (!state.token) return false
    
    try {
      const response = await axios.get('/api/auth/user/')
      commit('SET_USER', response.data)
      return true
    } catch (error) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
      return false
    }
  }
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
