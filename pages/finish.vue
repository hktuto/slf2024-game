<script lang="ts" setup>
const {loadQuestion } = useGame();
const router = useRouter()
function replay(){
    loadQuestion()
    router.push('/game/0');
}

function goLibrary(){
    window.location.href = 'https://slf2024.readingpromotion.gov.hk/page/resources'
}
</script>
<template>

    <div class="pageContainer">
        <div class="center">
            <h1>恭喜你！</h1>
            <p>遊戲完成，若想認識更多「香港古今建築」，可再玩一次。</p>
            <button @click="replay">再玩一次</button>
            <button @click="goLibrary">圖書館資源選介</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pageContainer{
    height: 100%;
    display: grid;
    place-items: center;
}
.center{
   
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