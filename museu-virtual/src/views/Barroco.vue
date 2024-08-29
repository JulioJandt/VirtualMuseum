<!-- Barroco.vue -->
<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(obra, index) in obras"
          :key="index"
          cols="12" sm="6" md="4"
        >
          <Quadro
            :src="obra.src"
            :alt="obra.alt"
            :title="obra.title"
            @click="openModal(obra)"
          />
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="600"
      >
        <v-card>
          <v-img
            :src="selectedObra?.src"
            :alt="selectedObra?.alt"
            aspect-ratio="4/3"
          ></v-img>
          <v-card-title>{{ selectedObra?.title }}</v-card-title>
          <v-card-text>
            <p><strong>Artista:</strong> {{ selectedObra?.artista }}</p>
            <p><strong>Ano:</strong> {{ selectedObra?.ano }}</p>
            <p>{{ selectedObra?.descricao }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-row>
      <v-col>
        <p>
          O Movimento Barroco foi um período artístico e cultural que teve origem na Itália no final do século XVI e se estendeu pela Europa e América Latina até o início do século XVIII. Surgiu em um contexto de mudanças sociais, políticas e religiosas, sendo marcado pela Contrarreforma da Igreja Católica em resposta à Reforma Protestante. O Barroco refletiu as tensões religiosas e políticas da época, com a Europa dividida entre católicos e protestantes, e a arte barroca sendo usada pela igreja como forma de reafirmar sua autoridade e atrair fiéis. O estilo grandioso e opulento do Barroco também foi influenciado pelo fortalecimento das monarquias absolutistas na Europa, refletindo o poder e a riqueza dos reis e da aristocracia. Na América Latina, o Barroco foi introduzido pelos colonizadores europeus e misturou-se com as tradições locais, resultando em um estilo único.
        </p>
        <br>
        <p>
          O Barroco é caracterizado por sua dramaticidade, emoção, realismo e detalhamento. Os artistas buscavam representar a realidade de forma intensa, com figuras expressivas e cenários ornamentados. A arte barroca também é marcada por movimento e dinamismo, com cenas turbulentas e formas curvas. Uma obra-prima do Barroco é a escultura "Êxtase de Santa Teresa" de Gian Lorenzo Bernini, que retrata a experiência religiosa de forma expressiva e detalhada. "A Vocação de São Mateus" é um exemplo do claroscuro de Caravaggio, com luz dramática destacando as figuras principais. "As Meninas" de Velázquez é um retrato famoso que mistura realidade e ilusão com perspectiva e interação entre personagens.
        </p>
        <br>
        <p>
          <strong>Artistas importantes:</strong> Gian Lorenzo Bernini é conhecido como o principal representante do Barroco em Roma, destacando-se por sua habilidade em capturar emoção e movimento em suas esculturas. Caravaggio revolucionou a pintura barroca com seu uso dramático de luz e sombra, enquanto Rubens dominou a arte barroca na Europa do Norte com suas cenas vibrantes e figuras exuberantes.
        </p>
        <br>
        <p>
          <strong>Técnicas e Influência Social:</strong> O Barroco utilizou técnicas inovadoras como o claroscuro e quadratura para criar efeitos visuais impressionantes. Além disso, desempenhou papel crucial na propaganda religiosa e política, com a Igreja Católica e as monarquias utilizando a arte barroca para comunicar suas mensagens.
        </p>
      </v-col>
      </v-row>

      <v-btn
      color="primary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdQHwaqYNfrxqU8qrCUyVbFRwgtkzykXp2UNb6_u8_TTfsj8Q/viewform?usp=sf_link"
      target="_blank"
      class="mt-4"
    >
      Quiz
    </v-btn>
    </v-container>
  </template>
  
  <script>
  import Quadro from '@/components/Quadro.vue'
  
  export default {
    components: {
      Quadro,
    },
    data() {
      return {
        obras: [
          { src: 'https://proximarte.wordpress.com/wp-content/uploads/2021/10/04-1.jpg?w=780', title: 'Extase de Santa teresa', artista: 'Gian Lorenzo Bernini', ano: 1652, descricao: 'Esta escultura em mármore, localizada na Igreja de Santa Maria della Vittoria, em Roma, é uma obra-prima do Barroco, capturando o momento místico da experiência religiosa com uma incrível expressividade e detalhamento.' },

          { src: 'https://solerverso.com.br/wp-content/uploads/The_Calling_of_Saint_Matthew-Caravaggo_1599-1600-1.jpg', title: 'A vocação de são Mateus', artista: 'Michelangelo Merisi da Caravaggio', ano: 1600, descricao: 'Este quadro é um exemplo clássico do uso do claroscuro, onde a luz dramatiza a cena e destaca as figuras principais, mostrando o estilo naturalista e emocional de Caravaggio.' },
          
          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/1200px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg', title: 'As Meninas', artista: 'Diego Velázquez', ano: 1656, descricao: 'Um dos mais famosos retratos do Barroco espanhol, onde Velázquez joga com a perspectiva e a interação entre os personagens, misturando realidade e ilusão.' },

          { src: 'https://arteeartistas.com.br/wp-content/uploads/2019/08/Davi-com-a-Cabeca-de-Golias.-Leitura-da-Obra-de-Caravaggio.jpg', title: 'Davi com a cabeça de Golias', artista: 'Michelangelo Merisi da Caravaggio', ano: '1606', descricao: ' É uma importante obra que pertence a uma série de pinturas religiosas realizadas por Michelangelo Merisi da Caravaggio.' },

          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bacchus_by_Caravaggio_1.jpg/1200px-Bacchus_by_Caravaggio_1.jpg', title: 'Baco', artista: 'Michelangelo Merisi da Caravaggio', ano: '1595', descricao: 'Baco é uma pintura do mestre do barroco italiano Michelangelo Merisi da Caravaggio. Está exposta na galeria de Uffizi, em Florença. A pintura mostra um Baco jovem reclinado à moda clássica com uvas e folhas de videira em seus cabelos, tocando o cordão de seu roupão frouxamente drapeado.' },

          { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GrEGBqOfuZgaqGCeCYL0MH2MnxW_tlM87A&s', title: 'Amor Vincit Omnia', artista: 'Michelangelo Merisi da Caravaggio', ano: 1602, descricao: 'O quadro mostra o Amor, o Cupido da mitologia romana, vestindo escuras asas de águia, semi-sentado ou descendo do que parece ser uma mesa' },

          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Diego_Velazquez_-_An_Old_Woman_Cooking_Eggs_-_Google_Art_Project.jpg/2422px-Diego_Velazquez_-_An_Old_Woman_Cooking_Eggs_-_Google_Art_Project.jpg', title: 'Velha fritando ovos', artista: 'Diego Velázquez', ano: 1618, descricao: 'Old Woman Frying Eggs é uma pintura de gênero de Diego Velázquez, produzida durante seu período de Sevilha. A data não é conhecida com precisão, mas acredita-se que seja por volta da virada de 1618, antes de sua mudança definitiva para Madri em 1623. A pintura está na Galeria Nacional da Escócia, em Edimburgo.' },

          { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Caravaggio_-_Taking_of_Christ_-_Dublin.jpg', title: 'A Captura de Cristo', artista: 'Michelangelo Merisi da Caravaggio', ano: 1602, descricao: 'A Captura de Cristo é uma pintura a óleo de 1602 do artista italiano do barroco Michelangelo Merisi da Caravaggio que pertenceu originalmente ao nobre Ciriaco Mattei e que se encontra actualmente na Galeria Nacional da Irlanda, em Dublin' },
        ],
        dialog: false,
        selectedObra: null,
      }
    },
    methods: {
      openModal(obra) {
        this.selectedObra = obra
        this.dialog = true
      },
    },
  }
  </script>
  