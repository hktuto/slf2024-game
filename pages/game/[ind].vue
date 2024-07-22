<script lang="ts" setup>
const { questions, loadQuestion, questionCount, confetti } = useGame()
const router = useRouter()
const selected = ref();
import { Modal } from 'usemodal-vue3';
let isVisible = ref(false);
const question = computed(() => {
    const {ind} = useRoute().params
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
        console.log("yeah")
        const {ind} = useRoute().params
        confetti.addConfetti()
        if(Number(ind) +1 >= questionCount) {
            router.push('/finish');
        }else{
            
            router.push(`/game/${Number(ind) +1}`);
        }
    }else{
        confetti.addConfetti({
                emojis:['😅','😖','❌']
            })
        console.log('lose')
    }
}

onMounted(() => {
   
})
</script>

<template>
    <div class="pageContainer">
        <div v-if="question" class="questionContainer">
            <div  class="imageContainer">
                <img :src="`/data/${question.image}`" />
            </div>
            <div class="content">

                <div class="question">
                    {{ question.question }}
                </div>
                <div class="tipButtonContainer ">
                    <button class="tipButton" @click="isVisible = true">必勝貼士</button>
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

            <Modal v-model:visible="isVisible" title="必勝貼士" :okButton="{text:'確定'}">
                <div>
                   <p> {{ question.knowledge }}</p>
                   <small v-if="question.sourceUrl"> <a :href="question.sourceUrl" target="_blank">資料來源</a></small>
                </div>
            </Modal>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.questionContainer{
    
}
.pageContainer{
    height: 100%;
    overflow: auto;
    padding-top: 24px;
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
    align-items: center;
    font-size:1.2rem;
    background: #fff;
    border-radius: 12px;
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
    
    background: linear-gradient(224deg, #6bee85, #b7e789, #baf0d3, #73e4ad, #8fe4ee);
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