import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Rubik',
  h1: {
    fontSize: '2.5em',
  },
  li: {
    fontSize: '.8em',
    marginBottom: '10px'
  },
  pre: {
    color: '#e535ab',
    fontSize: '.6em',
  },
  ul: {
    margin: 0
  },
  // custom colors
  colors: {
    text: 'white',
    background: '#161e26',
    link: '#e535ab',
  }
}