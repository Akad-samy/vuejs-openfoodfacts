import { getAllProducts } from "../../api/products.api"

const state = {
    search: "",
    pageSize: 9,
    page: 1,
    products:[],
    loader: false
}

const getters = {
    getSearch(state) {
        return state.search;
    },
    getProducts(state) {
        return state.products;
    },
    getLoader(state) {
        return state.loader;
    }
}

const actions = {
    async getProducts({commit, state}) {
        try {
            commit('SET_PRODUCTS', null)
            commit('CHANGE_LOADER', true)
            const response = await getAllProducts(state.search, state.pageSize, state.page);
            commit('SET_PRODUCTS', response.data.data);
            commit('CHANGE_LOADER', false)
        } catch (error) {
            console.log(error)
        }   
      },
}

const mutations = {
    SET_PRODUCTS(state, products) {
        return state.products = products;
    },
    SET_SEARCH(state, value) {
        return state.search = value;
    },
    CHANGE_LOADER(state, value) {
        return state.loader = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}