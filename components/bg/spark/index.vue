<template>
    <div class="fullPage">
        <canvas 
            id="gradient-canvas"
          data-transition-in/>
          <bgCity  />
    </div>
</template>

<script lang="ts" setup>
import {ParticleEngine} from './gl'

const particles = ref()

function updateCanvas(){
		particles.value.render();
	}

	function resizeCanvas(){
		particles.value.resize();
	}
onMounted(() => {
    console.log("Mounted")
    particles.value = new ParticleEngine('gradient-canvas');
    (createjs as any).Ticker.addEventListener("tick", updateCanvas);
	window.addEventListener('resize', resizeCanvas, false);
    console.log(particles.value)
})
</script>


<style lang="scss" scoped>
.fullPage{
    position: fixed;
    left:0;
    top:0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    background: linear-gradient(224deg, #6bee85, #b7e789, #baf0d3, #73e4ad, #8fe4ee);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
    #gradient-canvas{
        position: fixed;
        left: 0;
        top:0;
        height: 100vh;
        width: 100%;
        background: var(--primary-color);
        opacity: 1;
        transition: opacity .3s ease-in-out;
    }
}

.css-selector {
    
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