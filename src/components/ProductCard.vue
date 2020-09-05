<template>
  <div class="myCard neomorphism">
    <div class="image">
      <img :src="image" :alt="brand" />
    </div>
    <div class="title">
        <h3>{{title}}</h3>
    </div>
    <div class="score">
      <img src="/images/nutri.png" alt="nutri-score" width="80" />
      <img src="/images/nova-group-4.png" alt="nova-group" width="40" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:['image', 'brand', 'title']
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
  text-align: center;
  padding: 15px 0;
}
.image img {
  width: 8rem;
  object-position: top;
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
