<template>
  <NuxtLayout>

    <NuxtRouteAnnouncer />
      <nuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.fancyImage{
  border: 5px solid #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  background: #fff;
  padding-bottom: 20px;
  transform: rotate(-0.8deg);
  margin-bottom: 12px;
  &:after{
    content:"";
    position: absolute;
    left:0;
    bottom:0;
    background-image: url('/city.svg');
    width: 100px;
    height:100px;
  }
}
</style>
