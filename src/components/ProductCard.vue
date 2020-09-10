<template>
  <div class="myCard neomorphism">
    <div class="image">
      <img v-if="image" :src="image" :alt="brand" onerror="this.src='/images/logo.png';"/>
      <img v-else class="defaultImg" src="/images/logo.png" :alt="brand" />
    </div>
    <div class="title">
        <h4 class="font-weight-bold text-center">{{title}}</h4>
    </div>
    <div class="score">
      <img v-if="nutriscore" :src="'https://static.openfoodfacts.org/images/misc/nutriscore-'+ nutriscore +'.svg'" alt="nutri-score" width="80" />
      <img v-else src="/images/nutriscor.png" alt="nova-group" width="80"/>

      <img v-if="novagroup" :src="'https://static.openfoodfacts.org/images/misc/nova-group-'+ novagroup +'.svg'" alt="nova-group" width="40"/>
      <img v-else src="/images/nova-group-4.png" alt="nova-group" width="40"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:['image', 'brand', 'title', 'nutriscore', 'novagroup']
};
</script>

<style>
.myCard {
  height: 350px;
  width: 300px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin: 10px 5px;
}
.image {
  width: 100%;
  height: 55%;
  overflow: hidden;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

}
.image img {
  width: 8rem;
  object-position: top;
}
.image .defaultImg {
    filter: grayscale(100%); 
    opacity: .5
}
.myCard .title {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.myCard h3 {
  text-align: center;
}
.score {
  height: 35px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.score img {
    object-fit: contain;
}
</style>
