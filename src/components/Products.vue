<template>
  <div class="d-flex flex-wrap justify-content-center">
    <product-card 
        v-for="product in products"
        :key="product.code"
        :brand="product.brands"
        :title="product.product_name"
        :image="product.image_url"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
// import { mapGetters } from "vuex";
export default {
  name: "Products",
  components: {
    ProductCard,
  },
  computed: {
        products() {
            return this.$store.state.products;
        }
  },
  
};
</script>

<style>

</style>
