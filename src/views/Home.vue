<template>
  <div class="home">
    <Search />
    <div class="container my-4">
    <h4 class="font-weight-bold">Brand: <span class="text-uppercase">{{getSearch}}</span></h4>
      <Products />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Products from "@/components/Products.vue";
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  components: {
    Search,
    Products,
  },
  computed: {
    ...mapGetters('Products', ["getSearch"]),
  },
};
</script>
