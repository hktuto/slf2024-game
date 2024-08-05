<script lang="ts" setup>
const router = useRouter()

const { questions, loadQuestion, questionCount, confetti, score, retry, viewTip } = useGame()

function replay(){
    loadQuestion()
    router.push('/game/0');
    score.value = 0;
    retry.value = 0;
    viewTip.value = false
}

function goLibrary(){
    window.location.href = 'https://slf2024.readingpromotion.gov.hk/page/resources'
}

const scoreResult = computed(() => {
    if(score.value <= 29) {
        return {
            title:"新手級",
            content: '您對於香港建築的認識有待學習，一起到圖書館閱讀更多有關香港建築的書本吧！'
        }
    }
    if(score.value <= 49){
        return {
            title:"凡人級",
            content: '您對於香港建築有不錯的認識，不妨到圖書館閱讀更多有關香港建築的書吧！'
        }
    }
    if(score.value <= 69){
        return {
            title:"高手級",
            content: '您對於香港建築認識很深，如果到圖書館閱讀更多有關香港建築的書本，一定可以令您認識更多！'
        }
    }
    if(score.value <= 79){
        return {
            title:"高手級",
            content: '您對於香港建築認識很深，如果到圖書館閱讀更多有關香港建築的書本，一定可以令您認識更多！'
        }
    }
    if(score.value <= 89){
        return {
            title:"史詩級",
            content: '您對於香港的建築暸如指掌，看來您很喜愛香港的建築！歡迎您到圖書館多閱讀不同種類的書籍！'
        }
    }
    if(score.value <= 100){
        return {
            title:"傳說級",
            content: '您對於香港建築的認識無人能及！<br/>有時間可以到圖書館閱讀更多不同種類的書籍！'
        }
    }
})
</script>
<template>

    <div class="pageContainer">
        <div class="center">
            
            <div class="scoreContainer">
                <h1>恭喜你!</h1>
                <small>
                    得分
                </small>
                <div class="score">
                   {{ score }}
                </div>
                <div class="title">
                    {{ scoreResult?.title }}
                </div>
                <div class="content" v-html="scoreResult?.content">
                </div>
            </div>
            <p>遊戲完成，若想認識更多「香港古今建築」，可再玩一次。</p>
            
            <button @click="replay">再玩一次</button>
            <button @click="goLibrary">圖書館資源選介</button>
            <small>鳴謝古物古蹟辦事處提供部分相片</small>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.scoreContainer{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding: 12px;
    border-radius: 12px;;
    border-bottom: 1px solid #fff;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
    h1{
        margin: 0;
    }
    .score{
        font-size: 4rem;
        font-weight: 700;
        background: -webkit-linear-gradient(#32e1f9, #11dd8c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .title{
        font-size: 1.2rem;
        font-weight: 700;
    }
    .content{
    
        font-size: 1rem;
    }
}
.pageContainer{
    height: 100%;
    display: grid;
    place-items: center;
    @media (max-width: 600px){
        padding-inline: 24px;;
    }
}
.center{
   text-align: center;
}
button{
    display: block;
    width:100%;
    padding: 6px 12px;
    border:0;
    background: #fff;
    border-radius: 8px;
    font-size: 1.2rem;
    margin-bottom: 12px;
}
</style>