<template>
  <div class="home">
    <SearchCity v-on:place-changed="placeChanged" />
    <WeatherForecast :selected-place="selectedPlace" />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
