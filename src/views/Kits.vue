<template>
  <div class="kits">
      <div>
          <div class="title">
              Coffee Kits
          </div>
          <div class="content">
              <ProductCart assetFolder="kits" modal="false" v-for="(item, index) in products" :key="index" v-bind:productData="item"></ProductCart>
          </div>
      </div>
  </div>
</template>

<style scoped>
.kits {
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    padding-bottom: 20px;
    height: 100%;
}

.kits > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.kits > div .title {
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
import ProductsJson from '@/assets/kits/products.json'

export default {
  name: 'Kits',
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
