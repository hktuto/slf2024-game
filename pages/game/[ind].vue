<script lang="ts" setup>
const { questions, loadQuestion, questionCount, confetti, score, retry, viewTip } = useGame()
const router = useRouter()
const selected = ref();
import { Modal } from 'usemodal-vue3';
const {ind} = useRoute().params
let isVisible = ref(false);
const width = ref(280);


const question = computed(() => {
    
    if(questions.value.length === 0) {
        loadQuestion()
    }


    return questions.value[Number(ind)]
})

function itemClicked(selectedItem:string) {
    selected.value = selectedItem
}

async function checkAnswer(){
    if(selected.value && selected.value === question.value.answer){

        const {ind} = useRoute().params
        confetti.addConfetti()
        if(retry.value > 0){
            score.value += 5
        }else{
            score.value += 10
        }
        router.push(`/next/${Number(ind)}`);
    }else{
        confetti.addConfetti({
                emojis:['😅','😖','❌']
            })
        if(retry.value > 0) {
            router.push(`/next/${Number(ind)}`);
        }
        retry.value ++
        console.log('lose')
    }
}

function showTip(){
    viewTip.value = true;
    router.push(`/tip/${Number(ind)}`);
}

onMounted(() => {
    width.value = window.innerWidth > 600 ? 500 : 280;
})
</script>

<template>
    <div class="pageContainer">
        <div class="header">
            <img class="title_logo" src="/title_1.png" />
            <div class="count">
                {{ Number(ind) +1 }} /10
            </div>
            <div class="score">
                得分 : {{ score }}
            </div>
        </div>
        <div v-if="question" class="questionContainer">
            <div  class="imageContainer fancyImage">
                <img :src="`/data/${question.image}`" />
            </div>
            <div class="content">

                <div class="question">
                    {{ question.question }}
                </div>
                <div v-if="!viewTip" class="tipButtonContainer ">
                    <button class="tipButton" @click="showTip">小貼士</button>
                </div>
                <div v-if="retry > 0" style="color:red; font-weight:700">
                    還有一次補答機會
                </div>
                <div class="answerContainer">
                    <div :class="{answerItem:true, selected:selected === 'A'}" @click="itemClicked('A')">
                        <div class="option">A</div>
                        <div class="answer">{{ question.a }}</div>
                    </div>
                    <div :class="{answerItem:true, selected:selected === 'B'}" @click="itemClicked('B')">
                        <div class="option">B</div>
                        <div class="answer">{{ question.b }}</div>
                    </div>
                    <div :class="{answerItem:true, selected:selected === 'C'}" @click="itemClicked('C')">
                        <div class="option">C</div>
                        <div class="answer">{{ question.c }}</div>
                    </div>
                    <div :class="{answerItem:true, selected:selected === 'D'}" @click="itemClicked('D')">
                        <div class="option">D</div>
                        <div class="answer">{{ question.d }}</div>
                    </div>
                </div>
                <div class="submitButton" @click="checkAnswer">
                    提交
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.header{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
}
.title_logo{
    height: 40px;
}
.count{
    text-align: center;
    flex: 1 0 auto;
}
.questionContainer{
    
}
.pageContainer{
    height: 100%;
    overflow: visible;
    // padding-top: 12px;
    :deep{
        .modal-vue3-footer-cancel{
            display: none !important;
        }
    }
}
.question{
    font-size: 1.5rem;
}
.answerContainer{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    border-top: 1px solid #eee;
    padding-block: 24px;
    > * {
        flex: 1 0 calc( 50% - 24px);
    }
}
.imageContainer{
    width:100%;
    // aspect-ratio: 16 / 10;
    overflow: hidden;
    img {
        width:100%;
        object-fit: cover;
    }
}
.content{
    @media (max-width: 640px) {
        padding-inline: 24px;;
    }
}
.answerItem{
    padding: 12px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-size:1.2rem;
    background: #fff;
    border-radius: 12px;
    gap:12px;
    line-height: 1;
    &:hover{
        border: 1px solid #2e9f45;
    }
    &.selected{
        border: 2px solid #fff;
        background: #6bee85;
    }
}
.submitButton{
    width:100%;
    
    padding: 12px 12px;
    text-align: center;
    background: #6bee85;
    border: 1px solid #fff;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
}

.tipButton {
    position: relative;
    padding: 4px 12px;
    border: 2px solid #fff;
    border-radius: 6px;
    
    background: linear-gradient(224deg, #ee6b6b, #e789ce, #f0ceba, #e4d773, #ee8f8f);
    background-size: 1000% 1000%;
    font-size: 1rem;
    -webkit-animation: AnimationName 5s ease infinite;
    -moz-animation: AnimationName 5s ease infinite;
    animation: AnimationName 5s ease infinite;
    cursor: pointer;

}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 69%}
    50%{background-position:100% 32%}
    100%{background-position:0% 69%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 69%}
    50%{background-position:100% 32%}
    100%{background-position:0% 69%}
}
@keyframes AnimationName {
    0%{background-position:0% 69%}
    50%{background-position:100% 32%}
    100%{background-position:0% 69%}
}
</style>