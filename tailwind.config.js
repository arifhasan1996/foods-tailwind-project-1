/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#ffcc00',
        paragraphColor:'#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      fontFamily:{
        oswald:['Oswald', 'sans-serif'],
    dmsans: ['DM sans', 'sans-serif'],
      },
    },
    container:{
      center: true,
      padding: '1rem',
      sm: '1.5rem',
    },
    keyframes:{
      move:{
        "50%":{transform: 'translateY(-1rem)'}
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      },
    }
    
  },

  plugins: [],
}