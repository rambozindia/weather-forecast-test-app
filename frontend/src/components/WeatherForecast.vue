<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <p v-if="errorMsg"> {{ errorMsg }}</p>

    <div v-if="forecastData">
      <p> Temperature : {{ forecastData.current_weather.temperature }}</p>
      <p> Wind Speed : {{ forecastData.current_weather.windspeed }}</p>
      <p> Wind Direction : {{ forecastData.current_weather.winddirection }}</p>
      <p> Elevation : {{ forecastData.elevation }}</p>
    </div>

  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

  .rotate-45 {
        --transform-rotate: 45deg;
        transform: rotate(45deg);
    }

    .group:hover .group-hover\:flex {
        display: flex;
    }
    </style>
