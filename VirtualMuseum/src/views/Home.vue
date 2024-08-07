<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Bem-vindo ao Museu Virtual</h1>
        <v-btn color="primary" @click="$router.push('/barroco')">Explorar Barroco</v-btn>
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
  text-align: center;
  margin-top: 50px;
}
</style>
