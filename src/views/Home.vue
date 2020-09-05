<template>
  <div class="home">
    <Search />
    <div class="container my-4">
      <Products />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Products from "@/components/Products.vue";
export default {
  name: "Home",
  components: {
    Search,
    Products,
  },
};
</script>
