import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2.5rem;
`
export const LeftSide = styled.div`
  background-color: ${({ theme }) => theme.color.bodyColor};
`
export const Profile = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  border-radius: 2rem;

  /* display: grid; */
  display: flex;
  gap: 1rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 2px solid #00ff00;
    justify-content: center;
    align-items: center;
  }
  h1,
  h3 {
    background: ${({ theme }) => theme.color.bg_cards};
  }
`
export const PersonalData = styled.div`
  background: green;
`
export const Technologies = styled.div`
  background: yellow;
`
export const Experience = styled.div`
  background: pink;
`
export const Education = styled.div`
  background: blue;
`
export const RightSide = styled.div`
  background: #cb92b1;
`

/*  Profile,
  HomeWrapper,
  PersonalData,
  Technologies,
  Experience,
  Education,
  RightSide,
  LeftSide */
