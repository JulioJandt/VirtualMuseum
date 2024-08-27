<template>
    <v-container>
      <h1>Arte Barroca</h1>
      <ImageGallery :images="images" />
      <VideoPlayer :videoUrl="videoUrl" />
      <v-btn color="secondary" :href="googleFormsUrl" target="_blank">Preencha o Formulário</v-btn>
    </v-container>
  </template>
  
  <script>
  import ImageGallery from '@/components/ImageGallery.vue';
  import VideoPlayer from '@/components/VideoPlayer.vue';
  
  export default {
    components: {
      ImageGallery,
      VideoPlayer,
    },
    data() {
      return {
        images: [
          { src: '@/assets/images/obra1.jpg', title: 'Obra 1', description: 'Descrição da Obra 1' },
          { src: '@/assets/images/obra2.jpg', title: 'Obra 2', description: 'Descrição da Obra 2' },
          // Adicione mais imagens conforme necessário
        ],
        videoUrl: '@/assets/videos/barroco.mp4',
        googleFormsUrl: 'https://forms.gle/seu-link-do-google-forms',
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  