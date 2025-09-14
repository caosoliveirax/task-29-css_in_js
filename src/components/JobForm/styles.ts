import styled from 'styled-components'

export const JobsSearch = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.secundaryColor};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const InputSearch = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.mainColor};
`

export const ButtonSearch = styled.button`
  background-color: ${({ theme }) => theme.mainColor};
  border: 1px solid ${({ theme }) => theme.mainColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.secundaryColor};
  margin-left: 8px;
  cursor: pointer;
`
