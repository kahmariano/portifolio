import styled from 'styled-components'

export const RightSideContent = styled.div`
  gap: 1rem;
`
export const MyProjects = styled.div`
  background: ${({ theme }) => theme.color.bg_cards};
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1rem 1rem;
  h2,
  p {
    background: ${({ theme }) => theme.color.bg_cards};
    color: ${({ theme }) => theme.color.text_color};
  }
`
