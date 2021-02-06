<template>
  <div class="cart">
      <div>
          <div class="title">
              Shopping Cart
          </div>
          <div class="content">
              <ProductCart assetFolder="kits" modal="false" v-for="(item, index) in products" :key="index" v-bind:productData="item"></ProductCart>
              <ProductCart assetFolder="home" modal="false" v-for="(item, index) in products2" :key="index" v-bind:productData="item"></ProductCart>
          </div>
      </div>
      <div class="data-wrapper">
          <div class="price">
              <div class="title">Price</div>
              <div class="content">
                  <span>129,95€</span>
              </div>
          </div>
          <div class="address">
              <div class="title">Address</div>
              <div class="content">
                  <input type="text" placeholder="Type Your Address...">
              </div>
          </div>
          <div class="buy">
              <div class="content">
                  <span>Buy Now&nbsp;<font-awesome-icon icon="euro-sign"></font-awesome-icon></span>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
input {
    background-color: #FFF;
    margin-bottom: 10px;
    padding: 7px 30px;
    padding-left: 15px;
    border-radius: 20px;
    color: #063974;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
    width: 100%;
    font-size: 18px;
    border: 0;
}

input:focus {
    outline: none;
}

.buy {
    width: 100%;
}

.buy .content {
    background-color: #D5C17E;
    border-radius: 5px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.buy .content span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 20px;
    border: 1px solid #063974;
    border-radius: 5px;
    color: #063974;
}

::placeholder {
    color: #063974;
}

.data-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 35px;
    grid-gap: 25px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 2px solid #D5C17E;
    border-radius: 100px 0 100px 0;
}

.data-wrapper .content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

.price span {
    font-size: 42px;
    color: #D5C17E;
}

.cart {
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-row-gap: 20px;
    padding-bottom: 20px;
    height: 100%;
}

.cart > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.cart > div .title {
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    width: 100%;
}


</style>

<script>
import ProductCart from '@/components/ProductCart.vue'
import ProductsJson from '@/assets/kits/products.json'
import ProductsJson2 from '@/assets/home/products.json'

export default {
  name: 'ShoppingCart',
  components: {
      ProductCart
  },
  data() {
      return {
          products: Object.values(ProductsJson).slice(0, 3),
          products2: Object.values(ProductsJson2).slice(0, 2)
      }
  }
}
</script>
