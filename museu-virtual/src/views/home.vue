<template>
  <v-container>
    <h1>Bem-vindo ao Museu Virtual</h1>
    <v-btn :to="{ name: 'Barroco' }" color="primary">Explorar o Barroco</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
