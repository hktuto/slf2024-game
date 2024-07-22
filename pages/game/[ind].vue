<script lang="ts" setup>
const { questions, loadQuestion, questionCount } = useGame()
const router = useRouter()
const selected = ref();

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

function checkAnswer(){
    if(selected.value && selected.value === question.value.answer){
        console.log("yeah")
        const {ind} = useRoute().params
        if(Number(ind) +1 >= questionCount) {
            router.push('finish');
        }else{
            router.push(`/game/${Number(ind) +1}`);
        }
    }else{
        console.log('lose')
    }
}
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
                    <button class="tipButton"></button>
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
.pageContainer{
    height: 100%;
    overflow: auto;
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
    aspect-ratio: 16 / 10;
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
</style>