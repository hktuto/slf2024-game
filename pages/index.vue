<script lang="ts" setup>

const {loadQuestion } = useGame();


function startGame(){
    loadQuestion()
    const router = useRouter()
    router.push({
        path:'/introduction'
    })
}

</script>

<template>
    <div class="pageContainer">
        <div class="center">
            <div class="logo">
                <img src="/logo.png" />
            </div>
            <img class="title_logo" src="/title_1.png" />
            <button @click="startGame">比賽開始</button>
        </div>
    </div>
</template>

<style scoped>
.pageContainer{
    width:100%;
    height: 100%;
    display: grid;
    place-items: center;
}
.center{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
}
.title_logo{
    width:100%;
}
button{
    border:0;
    padding: 12px 24px;
    text-align: center;
    background: #6bee85;
    border: 1px solid #fff;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
}
h1{
    margin:0;
    font-size: 2.5rem;;
}
</style>