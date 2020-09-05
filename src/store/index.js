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
    }
  },
  actions: {
    getProducts({commit, state}) {
      commit('SET_PRODUCTS', null)
      state.loader = true;
      return axios.get(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${state.search}&json=true`)
      .then(response => {
        commit('SET_PRODUCTS', response.data.products)
        state.loader = false;
      }).catch(e => {
        console.log(e)
      })
    }
  },
  modules: {
  }
})
