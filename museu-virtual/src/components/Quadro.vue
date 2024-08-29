<template>
    <v-card
      class="quadro"
      elevation="3"
      outlined
    >
      <v-img
        :src="src"
        :alt="alt"
        aspect-ratio="4/3"
        class="quadro-image"
      ></v-img>
      <v-card-title>{{ title }}</v-card-title>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      src: String,
      alt: String,
      title: String,
    },
  }
  </script>
  
  <style scoped>
  .quadro {
    border: 5px solid #C19A6B; /* Dourado para simular moldura */
    padding: 10px;
    background-color: #F7F3E9; /* Marfim */
  }
  
  .quadro-image {
    border: 2px solid #8B5A2B; /* Moldura interna */
  }

  .quadro-image:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}


  </style>
  