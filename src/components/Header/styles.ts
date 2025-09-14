import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.secundaryColor};
  color: ${({ theme }) => theme.mainColor};
  text-align: center;
  padding: 24px 0;
`

export const ThemeButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.secundaryColor};
  background-color: ${({ theme }) => theme.mainColor};
  padding: 8px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`
