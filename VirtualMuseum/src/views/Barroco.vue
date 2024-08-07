<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Arte Barroca</h1>
        <v-img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="my-4"
          max-width="600"
        ></v-img>
         
        <!--<video
          src="path/video.mp4"
          controls
          class="my-4"
          max-width="600"
        ></video> -->
        <v-btn color="primary" :href="googleFormsLink" target="_blank">Preencha o Formulário</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Barroco',
  data() {
    return {
      images: [
        { src: 'path/to/image1.jpg', alt: 'Descrição da Imagem 1' },
        { src: 'path/to/image2.jpg', alt: 'Descrição da Imagem 2' },
        
      ],
      googleFormsLink: 'https://forms.gle/your-form-link',
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
