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
        <img :src="require(`@/assets/coffee-creator/images/image${currentImageNumber}.png`)">
    </div>
    <div class="data-wrapper">
        <div class="upper-data-section">
            <div class="left-actions">
                <div>
                    <span class="title">Coffee Creator</span>
                    <div class="content">
                        <ul class="flavor-selector">
                            <li v-on:click="popFlavorModal('1')">
                                <div><span>{{ firstFlavor }}</span></div>
                                <div>
                                    <div>
                                        <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                    </div>
                                    <div>
                                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                    </div>
                                </div>
                            </li>
                            <li v-on:click="popFlavorModal('2')">
                                <div><span>{{ secondFlavor }}</span></div>
                                <div>
                                    <div>
                                        <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                    </div>
                                    <div>
                                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="bean-selector">
                            <li v-on:click="popBeanModal('caf')">
                                <div><span>{{ cafBean }}</span></div>
                                <div>
                                    <div>
                                        <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                    </div>
                                    <div>
                                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                    </div>
                                </div>
                            </li>
                            <li class="no-bean"><span>Or</span></li>
                            <li v-on:click="popBeanModal('decaf')">
                                <div><span>{{ decafBean }}</span></div>
                                <div>
                                    <div>
                                        <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                    </div>
                                    <div>
                                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span class="title">Personalize Your Coffee</span>
                    <div class="content">
                        <ul class="pers-buttons">
                            <li>
                                <span>Flavor View</span>
                            </li>
                            <li class="no-fv">
                                <span>Or</span>
                            </li>
                            <li>
                                <span>Image From Giphy</span>
                            </li>
                        </ul>
                        <input type="text" placeholder="Type Product Name...">
                        <input type="text" placeholder="Who Made This Coffee?">
                    </div>
                </div>
            </div>
            <div class="right-actions">
                <ul class="data-entries">
                    <li class="rates">
                        <span class="title">Rates</span>
                        <ul class="content">
                            <li v-for="(item, index) in ingredients" :key="index">
                                <div><span>%{{ item.defaultPercentage }}</span></div>
                                <div>
                                    <div v-on:click="(item.defaultPercentage < 100) ? incrementRate(index) : null">
                                        <font-awesome-icon icon="caret-up"></font-awesome-icon>
                                    </div>
                                    <div v-on:click="(item.defaultPercentage > 0) ? decreaseRate(index) : null">
                                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="amounts">
                        <span class="title">Amount</span>
                        <ul class="content">
                            <li>
                                <span>250 gr.</span>
                            </li>
                            <li>
                                <span>500 gr.</span>
                            </li>
                            <li>
                                <span>1000 gr.</span>
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
        <div class="lower-data-section">
            <span class="title">Share This On</span>
            <div class="content">
                <ul class="pers-buttons social-section">
                    <li class="social-buttons">
                        <font-awesome-icon :icon="[ 'fab', 'instagram' ]"></font-awesome-icon>
                        <font-awesome-icon :icon="[ 'fab', 'twitter' ]"></font-awesome-icon>
                        <font-awesome-icon :icon="[ 'fab', 'facebook-square' ]"></font-awesome-icon>
                        <font-awesome-icon :icon="[ 'fab', 'whatsapp' ]"></font-awesome-icon>
                    </li>
                    <li class="no-fv">
                        <span style="font-size: 22px; font-weight: 100">Or</span>
                    </li>
                    <li class="share-button">
                        <span>Publish On Community Market&nbsp;<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <path d="M116.4,23.3l-18.6-14l-69.8,93.1c-3,4.1-4.7,8.9-4.7,14v325.8c0,38.6,31.2,69.8,69.8,69.8h325.8 c38.6,0,69.8-31.2,69.8-69.8V116.4c0-5.1-1.6-9.9-4.7-14L414.3,9.3C409.9,3.5,402.9,0,395.6,0H116.4c-7.3,0-14.2,3.5-18.6,9.3 L116.4,23.3v23.3H384l58.2,77.6v318.1c0,12.8-10.4,23.2-23.3,23.3H93.1c-12.8,0-23.2-10.4-23.3-23.3V124.1L135,37.2L116.4,23.3 v23.3V23.3z"/> <path d="M46.5,139.6h418.9c12.9,0,23.3-10.4,23.3-23.3c0-12.9-10.4-23.3-23.3-23.3H46.5c-12.9,0-23.3,10.4-23.3,23.3 C23.3,129.2,33.7,139.6,46.5,139.6"/> <path d="M325.8,209.5c-0.1,38.5-31.3,69.7-69.8,69.8c-38.5-0.1-69.7-31.3-69.8-69.8c0-12.9-10.4-23.3-23.3-23.3 c-12.9,0-23.3,10.4-23.3,23.3c0,64.3,52.1,116.3,116.4,116.4c64.3,0,116.3-52.1,116.4-116.4c0-12.9-10.4-23.3-23.3-23.3 S325.8,196.6,325.8,209.5L325.8,209.5z"/> </g> </svg></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <FlavorSelectorModal v-if="showModal" v-on:closeModal="closeModal()" v-on:selected="selectedFlavor" />
    <BeanSelectorModal v-if="showBeanModal" v-on:closeModal="closeBeanModal()" v-on:selected="selectedBean" v-bind:beans="modalBeans" />
</div>    
</template>
<style scoped>
.social-section .social-buttons {
    background: transparent;
    justify-content: space-between;
    width: auto;
    color: #D5C17E;
    font-size: 40px;
}

.social-section .social-buttons svg {
    margin: 0 10px;
}

.social-section .social-buttons:hover {
    box-shadow: none;
}

.social-section .share-button {
    width: auto!important;
    height: auto!important;
    padding: 2px;
}

.social-section .share-button span {
    width: 100%;
    height: 100%;
    font-size: 18px;
    padding: 10px
}

.social-section .share-button svg {
    width: 24px;
    fill: #063974
}

.data-wrapper {
    display: flex;
    flex-direction: column;
    padding: 35px;
    align-content: space-between;
    grid-column-gap: 40px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 2px solid #D5C17E;
    border-radius: 100px 0 100px 0;
}

.upper-data-section {
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-column-gap: 40px;
}

.lower-data-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

.amounts .content, .actions .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.pers-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.amounts li, .actions li, .pers-buttons li {
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

ul.pers-buttons li span {
    font-size: 14px;
}

.pers-buttons li.no-fv {
    width: auto;
    height: auto;
    background: transparent;
    color: #D5C17E;
    cursor: auto;
    padding: 0 10px;
}

.pers-buttons li.no-fv span {
    width: auto;
    height: auto;
    border: none;
}

.pers-buttons li.no-fv:hover {
    box-shadow: none;
}

.amounts li:hover, .actions li:hover, .pers-buttons li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.amounts li span, .actions li span, .pers-buttons li span {
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

.title {
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

ul.ingredients li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

ul.ingredients li img {
    display: block;
    padding: 10px;
    height: 17vh;
}

ul.ingredients li span {
    display: block;
    color: #D5C17E;
    font-size: 26px;
}

ul.flavor-selector li {
    cursor: pointer;
}

.rates ul.content, ul.flavor-selector {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
}

ul.bean-selector {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.rates ul.content li, ul.flavor-selector li, ul.bean-selector li, input {
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

::placeholder {
    color: #063974;
}

input {
    font-size: 18px;
    border: 0;
}

input:focus {
    outline: none;
}

ul.bean-selector li {
    margin: 0;
    cursor: pointer
}

ul.bean-selector li.no-bean {
    background-color: transparent;
    box-shadow: none;
    color: #D5C17E;
    font-size: 22px;
    width: auto;
}

.rates ul.content li div, ul.flavor-selector li div, ul.bean-selector li div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.rates ul.content li div div, ul.flavor-selector li div div, ul.bean-selector li div div {
    font-size: 20px;
    position: absolute;
    top: calc(50% - 5px);
    transform: translate(100%, -50%);
    display: block;
    cursor: pointer;
    overflow: none;
}

.rates ul.content li div div:last-of-type, ul.flavor-selector li div div:last-of-type, ul.bean-selector li div div:last-of-type {
    top: calc(50% + 5px);
}

.rates li span, ul.flavor-selector li span, ul.bean-selector li span {
    display: block;
    font-size: 18px;
    padding-right: 10px;
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
    flex-direction: column-reverse;
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
    left: 40px;
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
    right: 40px;
}

</style>

<script>
import Images from '@/assets/coffee-creator/images.json'
import Beans from '@/assets/coffee-creator/beans.json'
import FlavorSelectorModal from '@/components/FlavorSelectorModal.vue'
import BeanSelectorModal from '@/components/BeanSelectorModal.vue'

export default {
    name: "CoffeeCreator",
    components: {
        FlavorSelectorModal,
        BeanSelectorModal
    },
    data() {
        return {
            currentImageNumber: 1,
            images: Images,
            ingredients: [
                {
                    defaultPercentage: 65,
                },
                {
                    defaultPercentage: 35
                }
            ],
            firstFlavor: "Flavor 1",
            secondFlavor: "Flavor 2",
            currentFlavorNumber: 0,
            showModal: false,
            showBeanModal: false,
            cafBeans: Beans.caf,
            decafBeans: Beans.decaf,
            modalBeans: {},
            currentBeanType: 'caf',
            cafBean: 'Choose Coffee Beans...',
            decafBean: 'Choose Decaffeinated Beans...'
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if(this.showModal || this.showBeanModal) return

            if (e.key == 'ArrowRight') {
                this.next()
            } else if(e.key == 'ArrowLeft') {
                this.prev()
            }
        });
    },
    methods: {
        next: function () {
            if(this.images.includes((this.currentImageNumber + 1).toString())) {
                this.currentImageNumber += 1;
            }
        },
        prev: function () {
            if(this.images.includes((this.currentImageNumber - 1).toString())) {
                this.currentImageNumber -= 1;
            }
        },
        incrementRate: function (needle) {
            let inverseNeedle = (needle == 0 ? 1 : 0)   
            this.ingredients[needle].defaultPercentage += 5;
            this.ingredients[inverseNeedle].defaultPercentage -= 5;
        },
        decreaseRate: function (needle) {
            let inverseNeedle = (needle == 0 ? 1 : 0)
            this.ingredients[inverseNeedle].defaultPercentage += 5;
            this.ingredients[needle].defaultPercentage -= 5;
        },
        selectedFlavor: function (flavorData) {
            console.log("Selected flavor " + this.currentFlavorNumber)
            console.dir(flavorData)

            this.showModal = false
            switch(this.currentFlavorNumber) {
                case 1:
                    this.firstFlavor = flavorData.name
                    break;
                case 2:
                    this.secondFlavor = flavorData.name
                    break;
            }
        },
        selectedBean: function (beanName) {
            console.log("Selected bean " + beanName)

            this.showBeanModal = false
            switch(this.currentBeanType) {
                case 'caf':
                    this.decafBean = "Choose Decaffeinated Beans..."
                    this.cafBean = beanName
                    break;
                case 'decaf':
                    this.cafBean = "Choose Coffee Beans..."
                    this.decafBean = beanName
                    break;
            }
        },
        popFlavorModal: function (flavorNumber) {
            this.currentFlavorNumber = parseInt(flavorNumber)
            this.showModal = true
        },
        closeModal: function () {
            this.showModal = false
        },
        popBeanModal: function (type) {
            if(type != 'caf' && type != 'decaf') return

            switch(type) {
                case 'caf':
                    this.modalBeans = this.cafBeans
                    break;
                case 'decaf':
                    this.modalBeans = this.decafBeans
                    break;
            }

            this.currentBeanType = type
            this.showBeanModal = true
        },
        closeBeanModal: function () {
            this.showBeanModal = false
        },
    }
}
</script>