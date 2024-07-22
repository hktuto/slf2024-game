// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      script:[
        {src:'https://code.createjs.com/easeljs-0.7.1.min.js'},
        {src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"}
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  ssr:false,
  css:['assets/style.scss'],
  devtools: { enabled: true },
   modules:['@hypernym/nuxt-anime']
})
