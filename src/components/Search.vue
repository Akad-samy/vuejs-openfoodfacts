<template>
  <div
    class="hello d-flex justify-content-center align-items-center flex-column"
  >
    <h1 class="font-weight-bold my-4">Cherchez Votre Produit !</h1>
    <div class="form">
      <input type="text" class="neomorphism" v-model="$store.state.search"/>

      <button type="submit" class="btn btn-warning py-3" @click="getProducts()">
        <icon-base icon-name="search" width="18" height="18"
          ><search-icon />
        </icon-base>
        <!-- <div class="loader" v-if="loader === true"></div> -->
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import SearchIcon from "./icons/SearchIcon.vue";
// import { mapGetters } from 'vuex';
export default {
  name: "Search",
  components: {
    IconBase,
    SearchIcon,
  },
  computed: {
  },
  methods: {
    getProducts() {
      console.log(this.$store.dispatch("getProducts"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-bottom: 80px;
}
.form {
  width: 100%;
  text-align: center;
}
input {
  border: none;
  border-radius: 5px;
  width: 50%;
  padding: 15px;
  color: #f1be1c;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
input:focus {
  outline: none;
  background-color: #f8f9fa;
  box-shadow: -2px -2px 4px #ffffff, 4px 4px 4px #e8e9eb;
}
.btn {
  height: 55px;
  width: 40px;
}
.loader {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #114e6b; /* Blue */
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
