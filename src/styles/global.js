import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   background-color: ${({ theme }) => theme.color.bodyColor}; 
   font-family: 'Merriweather Sans', sans-serif;

}`
