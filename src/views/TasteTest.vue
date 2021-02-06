<template>
<div class="product">
    <div class="image-wrapper">
        <img :src="require(`@/assets/taste-test/image.png`)">
    </div>
    <div class="data-wrapper">
        <div>
            <div class="title">Taste Test&nbsp;<font-awesome-icon icon="clock" /></div>
            <div class="content">
                <p>The tasting test is a 30-second mini quiz that helps you find the best coffee for your taste.</p>
            </div>
        </div>
        <div>
            <div class="title">Let's find what is best for you!</div>
            <div class="content">
                <div class="timer">
                    <span>30</span>
                    <svg width="61" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0.5 0 60 70" fill="#d5c17e"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="70" viewBox="1 0 59.75 69.708"><path paint-order="stroke fill markers" fill-rule="evenodd" d="M40.833 0H20.916v6.639h19.917v-6.64zM54.21 21.21l4.714-4.713c-1.427-1.693-2.988-3.287-4.68-4.68L49.53 16.53c-5.145-4.116-11.618-6.573-18.655-6.573C14.377 9.958 1 23.336 1 39.833c0 16.498 13.344 29.875 29.875 29.875 16.53 0 29.875-13.377 29.875-29.875 0-7.037-2.457-13.51-6.54-18.622zM30.875 63.07c-12.846 0-23.237-10.39-23.237-23.236s10.39-23.236 23.237-23.236c12.846 0 23.236 10.39 23.236 23.236S43.721 63.07 30.875 63.07zm3.32-19.916l-6.64-19.917 6.64 19.917z"/></svg></svg>
                </div>
                <button v-on:click="startQuiz()">
                    <span>
                        Start Test
                    </span>
                </button>
            </div>
        </div>
    </div>
    <QuizModal v-on:closeModal="closeModal()" v-on:answered="handleAnswers" :question="currentQuestion" v-show="showQuiz" />
</div>    
</template>

<style scoped>
.content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    background-color: #D5C17E;
    color: #063974;
    border-radius: 5px;
    transition: 200ms all;
    cursor: pointer;
    height: 70px;
    padding: 2px;
    border: 0;
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

button span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px auto;
    width: 100%;
    border: 1px solid #063974;
    margin: 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
}


.timer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
}

.timer span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    font-weight: 900;
}

.data-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 35px;
    align-content: center;
    grid-column-gap: 40px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 4px solid #D5C17E;
    border-radius: 100px 0 100px 0;
    color: #D5C17E;
}

.data-wrapper > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title {
    display: flex;
    justify-content: center;
    text-align: left;
    padding-left: 20px;
    padding-right: 25%;
    padding-bottom: 5px;
    border-bottom: 4px solid #D5C17E;
    margin-bottom: 15px;
    color: #D5C17E;
    font-weight: 900;
    font-size: 20px;
}

.product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
    align-content: center;
    padding-right: 20px;
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
    height: 55vh;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);
}
</style>

<script>
import QuizModal from '@/components/QuizModal.vue'
import QuestionsJson from '@/assets/taste-test/questions.json'

export default {
    name: "TasteTest",
    components: {
        QuizModal
    },
    data() {
        return {
            currentQuestion: {},
            questions: QuestionsJson,
            showQuiz: false,
            results: {}
        }
    },
    methods: {
        startQuiz: function () {
            this.currentQuestion = this.questions['1']
            console.dir(this.currentQuestion)
            this.showQuiz = true
        },
        closeModal: function () {
            this.showQuiz = false
        },
        handleAnswers: function (result) {
            this.showQuiz = false
            this.results[result.number] = result
            if(result.number != "5") {
                this.currentQuestion = this.questions[(parseInt(result.number) + 1).toString()]
                this.showQuiz = true
            } else {
                switch(this.results["2"].answer) {
                    case 'a':
                        // Fruit [2]
                        this.$router.push(`/recommendation/2`)
                        break;
                    case 'b':
                        // Soft [6]
                        this.$router.push(`/recommendation/6`)
                        break;
                    case 'c':
                        // Sweet [5]
                        this.$router.push(`/recommendation/5`)
                        break;
                    case 'd':
                        // Exotic [1]
                        this.$router.push(`/recommendation/1`)
                        break;
                }
            }
        }
    }
}
</script>