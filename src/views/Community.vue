<template>
  <div class="community">
      <div>
          <div class="title">
              Global Community Top 5
          </div>
          <div class="content">
              <ProductCart assetFolder="community" v-for="(item, index) in products.global" :key="index" v-bind:productData="item"></ProductCart>
          </div>
      </div>
      <div>
          <div class="title">
              Local Community Top 5
          </div>
          <div class="content">
              <ProductCart assetFolder="community" v-for="(item, index) in products.local" :key="index" v-bind:productData="item"></ProductCart>
          </div>
      </div>
  </div>
</template>

<style scoped>
.community {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    padding-bottom: 20px;
}

.community > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.community > div .title {
    display: block;
    font-size: 22px;
    color: #D5C17E;
    padding: 0 20px 5px 20px;
    border-bottom: 2px solid #D5C17E;
    font-weight: 500;
    margin-bottom: 15px;
}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 20px;
    width: 100%;
}


</style>

<script>
import ProductCart from '@/components/ProductCart.vue'
import ProductsJson from '@/assets/community/products.json'

export default {
  name: 'Community',
  components: {
      ProductCart
  },
  data() {
      return {
          products: ProductsJson
      }
  }
}
</script>
