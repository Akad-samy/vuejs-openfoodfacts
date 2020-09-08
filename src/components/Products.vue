<template>
  <div class="d-flex flex-wrap justify-content-center">
    <product-card
      v-for="product in Products"
      :key="product.code"
      :brand="product.brands"
      :title="product.product_name"
      :image="product.image_url"
      :nutriscore="product.nutriscore_grade"
      :novagroup="product.nova_group"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Products",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["Products"]),
  },
};
</script>

<style></style>
