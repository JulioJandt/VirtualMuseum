<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
body {
  font-family: 'Georgia', serif;
}

h1, h2, h3, .v-card__title {
  font-family: 'Times New Roman', serif;
  font-weight: bold;
}


</style>