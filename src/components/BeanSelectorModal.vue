<template>
<div class="modal-wrapper">
<div class="community-modal">
<button class="close-btn" v-on:click="closeModal()">
    <font-awesome-icon icon="times"></font-awesome-icon>
</button>
<div class="modal-content">
    <div>
        <div class="title">
            <span>{{ beans[currentBeanNumber].name }}</span>
        </div>
        <div class="actions">
            <ul class="content">
                <button class="action-btn prev-btn" v-on:click="prev()">
                    <font-awesome-icon icon="chevron-left">
                    </font-awesome-icon>
                </button>
                <button class="action-btn next-btn" v-on:click="next()">
                    <font-awesome-icon icon="chevron-right">
                    </font-awesome-icon>
                </button>
                <li v-on:click="handle()">
                    <span>Choose</span>
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
    width: 60%;
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
    width: 50%;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #063974;
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
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #063974;
    color: #D5C17E;
    margin: 10px;
    border-radius: 5px;
    transition: 200ms all;
    cursor: pointer;
    height: 50px;
    width: 100%;
    padding: 2px;
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
}

.actions li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.actions li span {
    display: flex;
    justify-content: center;
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

.action-btn {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translate(0, -50%);
    background-color: transparent;
    border: 0;
    color: #063974;
    font-size: 50px;
    cursor: pointer;
    z-index: 999;
}

.action-btn:focus {
    outline: none;
}

.action-btn.next-btn {
    left: auto;
    right: 40px;
}
</style>

<script>
export default {
    name: 'BeanSelectorModal',
    props: [
        'beans'
    ],
    data() {
        return {
            currentBeanNumber: 1
        }
    },
    methods: {
        next: function () {
            if(this.beans[(this.currentBeanNumber + 1).toString()] !== undefined) {
                this.currentBeanNumber += 1;
            }
        },
        prev: function () {
            if(this.beans[(this.currentBeanNumber - 1).toString()] !== undefined) {
                this.currentBeanNumber -= 1;
            }
        },
        closeModal: function () {
            this.$emit('closeModal')
        },
        handle: function () {
            this.$emit('selected', this.beans[this.currentBeanNumber].name)
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowRight') {
                this.next()
            } else if(e.key == 'ArrowLeft') {
                this.prev()
            } else if(e.key == 'Escape') {
                this.closeModal()
            } else if(e.key == 'Enter') {
                this.handle()
            }
        });
    }
}

</script>