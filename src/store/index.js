import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    products:[],
    loader: false
  },
  getters: {
    Search(state) {
      return state.search;
    },
    Products(state) {
      return state.products;
    },
    Loader(state) {
      return state.loader;
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      return state.products = products;
    },
    SET_SEARCH(state, value) {
      return state.search = value;
    },
    CHANGE_LOADER(state, value) {
      return state.loader = value;
    }
  },
  actions: {
    getProducts({commit, state}) {
      commit('SET_PRODUCTS', null)
      commit('CHANGE_LOADER', true)
      return axios.get(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${state.search}&json=true`)
      .then(response => {
        commit('SET_PRODUCTS', response.data.products)
        commit('CHANGE_LOADER', false)
      }).catch(e => {
        console.log(e)
      })
    },
  },
  modules: {
  }
})
