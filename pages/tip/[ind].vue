<script lang="ts" setup>
const { questions, loadQuestion, questionCount, confetti, score, retry, viewTip } = useGame()
const {ind} = useRoute().params

const question = computed(() => {
    
    if(questions.value.length === 0) {
        loadQuestion()
    }


    return questions.value[Number(ind)]
})
</script>

<template>
     <div class="pageContainer">
        <div class="header">
            <img class="title_logo" src="/title_1.png" />
            <div class="count">
                小貼士
            </div>
            <div class="score">
                得分 : {{ score }}
            </div>
        </div>
        <div v-if="question" class="questionContainer">
            <div  class="imageContainer fancyImage">
                <img :src="`/data/${question.image}`" />
            </div>
            <div class="content" v-html="question.knowledge">
            </div>
            <Button class="tipButton" @click="$router.back()">返回</Button>
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