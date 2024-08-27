<template>
    <v-row>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card>
          <v-img :src="image.src" :alt="image.title" height="200px"></v-img>
          <v-card-title>{{ image.title }}</v-card-title>
          <v-card-text>{{ image.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  v-card {
    margin-bottom: 20px;
  }
  </style>
  