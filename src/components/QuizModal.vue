<template>
<div class="modal-wrapper" v-show="showModal">
<div class="community-modal">
<button class="close-btn" v-on:click="closeModal()">
    <font-awesome-icon icon="times"></font-awesome-icon>
</button>
<div class="modal-content">
    <div>
        <div class="title">
            <span>{{ question.number }}. {{ question.title }}</span>
        </div>
        <div class="actions">
            <ul class="content">
                <li v-on:click="handle('a')">
                    <span>A. {{ question.a }}</span>
                </li>
                <li v-on:click="handle('b')">
                    <span>B. {{ question.b }}</span>
                </li>
                <li v-on:click="handle('c')">
                    <span>C. {{ question.c }}</span>
                </li>
                <li v-on:click="handle('d')">
                    <span>D. {{ question.d }}</span>
                </li>
            </ul>
        </div>
    </div>
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

.title {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 5px;
    margin-bottom: 5px;
}

.title span {
    color: #063974;
    font-size: 26px;
}

.modal-content {
    border: 2px solid #063974;
    border-radius: 40px 0 40px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    padding: 40px;
}

.modal-content > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.actions .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.actions li {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
    width: 100%;
    background-color: #063974;
    color: #D5C17E;
    margin: 10px;
    border-radius: 5px;
    transition: 200ms all;
    cursor: pointer;
    height: 60px;
    padding: 2px;
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
}

.actions li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.actions li span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 20px;
    width: 100%;
    border: 1px solid #D5C17E;
    margin: 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
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
    name: 'QuizModal',
    props: [
        'showModal', 'question'
    ],
    methods: {
        closeModal: function () {
            this.$emit('closeModal')
        },
        handle: function (answer) {
            let result = this.question
            result.answer = answer
            this.$emit('answered', result)
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