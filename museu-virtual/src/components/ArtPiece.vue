<template>
    <v-card class="ma-5">
      <v-img :src="image" height="300"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      image: String,
    },
  };
  </script>
  