<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useIp } from '@/composables/ip'
import { useGeo } from '@/composables/geo'

// const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m,rain,cloud_cover'
const data = ref('Teste')

onMounted(async () => {
  // const ip = await useIp()
  
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  alert(window.location.href)

  

  data.value = await useGeo('138.84.42.211')
})
</script>
<template>
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <div class="float-md-start mb-0">
        <img class="img-fluid" src="/wheater.svg" alt="Clima" style="max-height: 40px;" />
        Clima
      </div>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Início</a>
      </nav>
    </div>
  </header>

  <main class="px-3">
    <h1>{{ data }}</h1>
    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
  </footer>
</div>
</template>
<style>
@import url('/cover.css');
</style>