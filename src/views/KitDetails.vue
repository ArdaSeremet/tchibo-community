<template>
<div class="product">
    <div class="image-wrapper">
        <button class="action-btn prev-btn" v-on:click="prev()">
            <font-awesome-icon icon="chevron-left">
            </font-awesome-icon>
        </button>
        <button class="action-btn next-btn" v-on:click="next()">
            <font-awesome-icon icon="chevron-right">
            </font-awesome-icon>
        </button>
        <img :src="require(`@/assets/kits/products/${product.slug}/image${(currentImageNumber == `2`) ? `2` : ``}.png`)">
    </div>
    <div class="data-wrapper">
        <div>
            <ul class="data-entries">
                <li>
                    <span class="title">Kit Includes</span>
                    <div class="content">
                        <ul class="ingredients">
                            <li v-for="(item, index) in product.ingredients" :key="index">
                                <span>{{ item.amount }} x {{ item.name }}</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span class="title">Who is this kit designed for?</span>
                    <p>{{ product.forWhom }}</p>
                </li>
            </ul>
        </div>
        <div class="right-data-div">
            <ul class="data-entries">
                <li class="rating">
                    <span class="title">Rates</span>
                    <ul class="content">
                      <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                      <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                      <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                      <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                      <li><font-awesome-icon icon="star-half-alt"></font-awesome-icon></li>
                    </ul>
                </li>
                <li class="rates">
                    <span class="title">Amount</span>
                    <ul class="content">
                        <li>
                            <div><span>{{ itemAmount }}</span></div>
                            <div>
                                <div v-on:click="(itemAmount < 100) ? (itemAmount += 1) : null">
                                    <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                </div>
                                <div v-on:click="(itemAmount > 0) ? (itemAmount -= 1) : null">
                                    <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="actions">
                    <span class="title">Order</span>
                    <ul class="content">
                        <li>
                            <span>Buy Now&nbsp;<font-awesome-icon icon="euro-sign"></font-awesome-icon></span>
                        </li>
                        <li>
                            <span>Add to Cart&nbsp;<font-awesome-icon icon="shopping-cart"></font-awesome-icon></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>    
</template>
<style scoped>

.data-wrapper {
    display: grid;
    grid-template-columns: 5fr 3fr;
    padding: 35px;
    grid-column-gap: 40px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 2px solid #D5C17E;
    border-radius: 100px 0 100px 0;
}

.data-wrapper > div {
  height: 100%;
}

ul.data-entries {
    display: grid;
    align-content: space-between;
    color: #D5C17E;
    height: 100%;
}

ul.data-entries li {
    display: grid;
    flex-wrap: wrap;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.rating ul.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-content: center;
}

.rating ul li {
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
    font-weight: bold;
    color: #D5C17E;
}

.rating ul li svg {
    font-size: 28px;
}


.actions .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.actions li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 134px;
    background-color: #D5C17E;
    color: #063974;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: 200ms all;
    cursor: pointer;
    height: 30px;
}

.amounts li:hover, .actions li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.amounts li span, .actions li span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    padding: 20px auto;
    width: 130px;
    border: 1px solid #063974;
    margin: 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
}

.amounts li:last-of-type, .actions li:last-of-type {
    margin-bottom: 0;
}

ul.data-entries li:first-of-type .title {
    margin-top: 0;
}

ul.data-entries li .title {
    display: block;
    font-size: 22px;
    color: #D5C17E;
    padding: 0 10px 5px 10px;
    border-bottom: 2px solid #D5C17E;
    margin: 10px 0;
    font-weight: 500;
}

ul.ingredients {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

ul.ingredients li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

ul.ingredients li span {
    display: block;
    color: #D5C17E;
    font-size: 22px;
}

.rates ul.content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.rates ul.content li {
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
}

.rates ul.content li div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.rates ul.content li div div {
    font-size: 20px;
    position: absolute;
    top: calc(50% - 5px);
    transform: translate(100%, -50%);
    display: block;
    cursor: pointer;
    overflow: none;
}

.rates ul.content li div div:last-of-type {
    top: calc(50% + 5px);
}

.rates li span {
    display: block;
    font-size: 18px;
}

p {
    text-align: left;
}

.product {
    display: grid;
    grid-template-columns: 2fr 3fr;
    justify-items: space-between;
    align-content: center;
}
.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
    overflow: hidden;
    height: 70vh;
}

.image-wrapper img {
    display: block;
    height: 70vh;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);
}

.image-wrapper .action-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    background-color: transparent;
    border: 0;
    color: #D5C17E;
    font-size: 50px;
    cursor: pointer;
    z-index: 999;
}

.image-wrapper .action-btn:focus {
    outline: none;
}

.image-wrapper .action-btn.next-btn {
    left: auto;
    right: 0;
}
</style>

<script>
import ProductsJson from '@/assets/kits/products.json'

export default {
    name: "KitDetails",
    data() {
        return {
            currentImageNumber: "1",
            currentProductId: this.$route.params.id,
            product: ProductsJson[this.$route.params.id],
            itemAmount: 1
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowRight') {
                this.next()
            } else if(e.key == 'ArrowLeft') {
                this.prev()
            }
        });
    },
    methods: {
        next: function () {
          if(this.currentImageNumber == "1") {
            this.currentImageNumber = "2"
          }
        },
        prev: function () {
          if(this.currentImageNumber == "2") {
            this.currentImageNumber = "1"
          }
        }
    }
}
</script>