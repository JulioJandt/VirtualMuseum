<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Bem-vindo ao Museu Virtual</h1>
          <p>Explore a arte do Barroco na próxima página.</p>
          <v-btn color="primary" @click="$router.push('/barroco')">Explore o Barroco</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  