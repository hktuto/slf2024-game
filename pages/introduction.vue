<script lang="ts" setup>
const router = useRouter()


</script>
<template>

    <div class="pageContainer">
        <div class="center">
            
            <h1>遊戲規則</h1>
            <p>
                <ol>
                    <li>
                        ⁠每場遊戲共有十條問題，問題由問題庫隨機抽出
                    </li>
                    <li>⁠每場遊戲有一次機會使用小貼士，可以在答問題前觀看有關建築物的小知識</li>
                    <li>⁠每條問題有一次補答機會</li>
                    <li>⁠答對+10分，補答+5分，答錯不扣分</li>
                </ol>
                </p>
            
            <button @click="$router.push('/game/0')">比賽開始</button>
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
   text-align: left;
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
li{
    margin-bottom:12px;
}
</style>