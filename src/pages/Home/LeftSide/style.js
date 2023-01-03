import styled from 'styled-components'

export const LeftSideContent = styled.div`
  background-color: ${({ theme }) => theme.color.bodyColor};
  display: grid;
  gap: 1rem;
`
export const Profile = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  border-radius: 2rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 1rem 0;

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
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  display: grid;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  border-radius: 2rem;
  gap: 1rem;
  padding: 1rem 0 1rem 1rem;

  p,
  a,
  img {
    background: ${({ theme }) => theme.color.bg_cards};
    text-decoration: none;
    color: ${({ theme }) => theme.color.text_color};
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
export const Technologies = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  padding: 1rem;
  border-radius: 2rem;
  h2 {
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.color.bg_cards};
    color: ${({ theme }) => theme.color.text_color};
  }
  div {
    background: ${({ theme }) => theme.color.bg_cards};
    gap: 0.5rem;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 0 0 1rem;
  }
  p {
    background: ${({ theme }) => theme.color.bg_techs};
    color: #000000;
    border-radius: 30px;
    font-weight: bold;
    text-transform: lowercase;
    display: flex;
    justify-content: center;
    padding: 0.2rem;
  }
`
export const Experience = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  padding: 1rem;
  border-radius: 2rem;
  display: grid;
  gap: 1rem;
  h2,
  ul,
  li,
  dd {
    background: ${({ theme }) => theme.color.bg_cards};
  }
  ul,
  li,
  dd {
    margin: 0 0 0 1rem;
  }
`
export const Education = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  color: ${({ theme }) => theme.color.text_color};
  padding: 1rem;
  border-radius: 2rem;
  display: grid;
  gap: 1rem;

  h2,
  ul,
  li,
  dd {
    background: ${({ theme }) => theme.color.bg_cards};
  }
  ul,
  li,
  dd {
    margin: 0 0 0 1rem;
  }
`
