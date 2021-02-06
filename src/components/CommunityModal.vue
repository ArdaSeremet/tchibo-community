<template>
<div class="modal-wrapper" v-show="showModal">
<div class="community-modal">
<button class="close-btn" v-on:click="closeModal()">
    <font-awesome-icon icon="times"></font-awesome-icon>
</button>
<div class="modal-content">
    <div>
        <div class="title">
            <span>{{ productData.name }}</span>
        </div>
        <div class="image">
            <img :src="require(`@/assets/community/products/${productData.slug}/image.png`)">
        </div>
        <div class="actions">
            <ul class="content">
                <li>
                    <span>Buy Now&nbsp;<font-awesome-icon icon="money-bill-wave"></font-awesome-icon></span>
                </li>
                <li>
                    <span>Add to Cart&nbsp;<font-awesome-icon icon="shopping-cart"></font-awesome-icon></span>
                </li>
            </ul>
        </div>
    </div>
    <div class="right-side">
        <div class="made-by">
            <div class="title">
                <span>Made By</span>
            </div>
            <div class="content">
                <span>{{ productData.madeBy }}</span>
                <ul>
                    <li><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></li>
                    <li><font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon></li>
                    <li><font-awesome-icon :icon="['fas', 'user-alt']"></font-awesome-icon></li>
                </ul>
            </div>
        </div>
        <div class="rating">
            <div class="title">
                <span>Rate This Coffee</span>
            </div>
            <ul class="content">
                <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                <li><font-awesome-icon icon="star"></font-awesome-icon></li>
                <li><font-awesome-icon icon="star-half-alt"></font-awesome-icon></li>
            </ul>
        </div>
        <div class="ingredients">
            <div class="title">
                <span>Includes</span>
            </div>
            <div class="content">
                <span v-for="(item, index) in productData.ingredients" :key="index">{{ item.name }} %{{ item.defaultPercentage }}</span>
                <span>{{ productData.beans }} Used</span>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</template>

<style scoped>
.modal-wrapper {
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    overflow: auto;
    transition: all 0.3s linear;
    background-image: url('/blue.png');
    background-position: center center;
}
.ingredients .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.ingredients .content span {
    color: #063974;
    line-height: 1.3;
}

.content {
    justify-items: center;
}

.made-by .content, .rating .content, .ingredients .content {
    margin-top: 12px;
}

.made-by .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    color: #063974;
    align-items: center;
}

.made-by .content ul, .rating ul.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    grid-gap: 10px;
}

.rating ul.content {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.made-by .content ul li, .rating ul li {
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
    font-size: 30px;
    font-weight: bold;
    color: #063974
}

.rating ul li svg {
    font-size: 38px;
}

.community-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #D5C17E;
    padding: 7px;
    border-radius: 40px 0 40px 0;
}

.actions .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-items: center;
    grid-gap: 10px;
}

.actions li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 134px;
    background-color: #063974;
    color: #D5C17E;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: 200ms all;
    cursor: pointer;
    height: 30px;
}

.actions li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.actions li span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    padding: 20px auto;
    width: 130px;
    border: 1px solid #D5C17E;
    margin: 0;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
}

.actions li:last-of-type {
    margin-bottom: 0;
}

.title {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #063974;
    margin-bottom: 5px;
}

.title span {
    color: #063974;
    font-size: 20px;
}

.image img {
    display: block;
    padding: 10px;
    height: 50vh;
}

.modal-content {
    border: 2px solid #063974;
    border-radius: 40px 0 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding: 20px 40px;
}

.modal-content > div {
    display: grid;
}

.close-btn {
    display: block;
    padding: 5px;
    position: absolute;
    top: 30px;
    right: 30px;
    border: 0;
    font-size: 22px;
    color: #063974;
    background-color: transparent;
    cursor: pointer;
    transform: translate(50%, -50%);
}

.close-btn:focus {
    outline: none;
}

</style>

<script>

export default {
    name: 'CommunityModal',
    props: [
        'showModal', 'productData'
    ],
    methods: {
        closeModal: function () {
            this.$emit('closeModal')
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                this.closeModal()
            }
        });
    },
}

</script>