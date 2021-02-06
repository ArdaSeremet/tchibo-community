<template>
  <div class="product-cart">
      <div class="product">
          <div class="image">
              <img :src="require(`./../assets/${assetFolder}/products/${productData.slug}/image.png`)">
          </div>
          <div class="title">
              <span>{{ productData.name }}</span>
          </div>
          <div class="bottom">
              <div class="price">
                  <span class="upper">{{ productData.price.split(',')[0] }}</span>
                  <span class="lower">,{{ productData.price.split(',')[1] }}€</span>
              </div>
              <div class="actions">
                  <button>
                      <font-awesome-icon icon="plus"></font-awesome-icon>
                  </button>
                  <button v-on:click="showProduct()">
                      <font-awesome-icon icon="search"></font-awesome-icon>
                  </button>
              </div>
          </div>
      </div>
      <CommunityModal v-if="modal != 'false'" v-on:closeModal="closeModal()" v-bind:productData="productData" v-bind:showModal="modalState" />
  </div>
</template>

<style scoped>
.product-cart {
    background-color: #D5C17E;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 20px 0 20px 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.title span {
    color: #063974;
    font-size: 18px;
    text-align: left;
}

.title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #063974;
    margin-bottom: 5px;
}

.bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-content: center;
    width: 100%;
}

.bottom .price {
    color: #063974;
    display: block;
}

.bottom .price .upper {
    font-size: 42px;
}

.bottom .price .lower {
    font-size: 14px;
}

.bottom .actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    align-items: center;
    width: 100%;
}

.bottom .actions button {
    background-color: #063974;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #FFF;
    font-weight: bold;
    font-size: 24px;
    border: 0;
    cursor: pointer;
}

.bottom .actions button:focus {
    outline: none;
}

.product {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid #063974;
    border-radius: 20px 0 20px 0;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

img {
    display: block;
    height: 150px;
    padding: 12px;
}

</style>

<script>
import CommunityModal from '@/components/CommunityModal.vue'

export default {
  name: 'ProductCart',
  components: {
      CommunityModal
  },
  props: [
      'productData', 'modal', 'assetFolder'
  ],
  data() {
      return {
          modalState: false
      }
  },
  methods: {
      showProduct: function () {
          if(this.modal != 'false') {
            this.modalState = true
          } else {
              // Then we come from the Kits component...
              this.$router.push(`/kit/${this.productData.slug}`)
          }
      },
      closeModal: function () {
          this.modalState = false
      }
  }
}
</script>
