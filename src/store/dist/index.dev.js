"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    search: "",
    products: [],
    loader: false
  },
  getters: {
    Search: function Search(state) {
      return state.search;
    },
    Products: function Products(state) {
      return state.products;
    },
    Loader: function Loader(state) {
      return state.loader;
    }
  },
  mutations: {
    SET_PRODUCTS: function SET_PRODUCTS(state, products) {
      return state.products = products;
    },
    SET_SEARCH: function SET_SEARCH(state, value) {
      return state.search = value;
    },
    CHANGE_LOADER: function CHANGE_LOADER(state, value) {
      return state.loader = value;
    }
  },
  actions: {
    getProducts: function getProducts(_ref) {
      var commit = _ref.commit,
          state = _ref.state;
      commit('SET_PRODUCTS', null);
      commit('CHANGE_LOADER', true);
      return _axios["default"].get("https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=".concat(state.search, "&json=true")).then(function (response) {
        commit('SET_PRODUCTS', response.data.products);
        commit('CHANGE_LOADER', false);
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  modules: {}
});

exports["default"] = _default;