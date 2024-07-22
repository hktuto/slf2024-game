<script lang="ts" setup>

const {loadQuestion } = useGame();


function startGame(){
    loadQuestion()
    const router = useRouter()
    router.push({
        path:'/game/0'
    })
}

</script>

<template>
    <div class="pageContainer">
        <div class="center">
            <div class="logo">
                <img src="/logo.png" />
            </div>
            <h1>香港古今建築問答大賽</h1>
            <button @click="startGame">開始遊戲</button>
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