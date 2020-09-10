<template>
  <div class="d-flex flex-wrap justify-content-center">
    <product-card
      v-for="product in getProducts"
      :key="product.codebar"
      :brand="product.brand"
      :title="product.title"
      :image="image(product.image)"
      :nutriscore="product.nutri_score"
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
    ...mapGetters('Products', ["getProducts"]),
  },
  methods: {
    image(imageProduct) {
      if (imageProduct) {
        if (imageProduct.startsWith("/")) {
          imageProduct =
            "https://degrassi-crown-08212.herokuapp.com/images/products" +
            imageProduct;
        }
        return imageProduct;
      }
    },
  },
};
</script>

<style></style>
