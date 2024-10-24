<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <!-- <div> -->
  <!-- <a href="https://vitejs.dev" target="_blank"> -->
  <!-- <img src="/wheater.svg" class="logo" alt="Clima" /> -->
  <!-- </a> -->
  <!-- </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <section class="section">
    <div class="container">
      <h1 class="title mb-3">Clima</h1>
      <p class="subtitle mb-3">
        Modern CSS framework based on
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
      </p>
      <div class="field mb-3">
        <div class="control">
          <input class="input" type="text" placeholder="Input">
        </div>
      </div>
      <div class="field mb-3">
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>
      <div class="buttons">
        <a class="button is-primary">Primary</a>
        <a class="button is-link">Link</a>
      </div>
    </div>
  </section>
</template>