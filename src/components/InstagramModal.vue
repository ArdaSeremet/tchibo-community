<template>
<div class="modal-wrapper">
<div class="community-modal">
<button class="close-btn" v-on:click="closeModal()">
    <font-awesome-icon icon="times"></font-awesome-icon>
</button>
<div class="modal-content">
    <img src="./../assets/coffee-creator/images/dogeinsta.jpeg" alt="">
</div>
</div>
</div>
</template>

<style scoped>
.community-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #D5C17E;
    padding: 7px;
    border-radius: 40px 0 40px 0;
}

img {
    border-radius: 40px 0 40px 0;
    display: block;
    height: 90vh;
}

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

.close-btn {
    display: block;
    padding: 5px;
    position: absolute;
    top: 30px;
    right: 30px;
    border: 0;
    font-size: 22px;
    color: #D5C17E;
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
    name: 'InstagramModal',
    methods: {
        closeModal: function () {
            this.$emit('closeModal')
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if(e.key == 'Escape') {
                this.closeModal()
            }
        });
    }
}

</script>