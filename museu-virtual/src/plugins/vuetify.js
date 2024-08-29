import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const myTheme = {
  dark: false,
  colors: {
    background: '#F7F3E9', // Marfim
    primary: '#C19A6B',   // Dourado
    secondary: '#8B5A2B', // Marrom
    accent: '#D3B8AE',    // Tons suaves adicionais
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme,
    },
  },
})
