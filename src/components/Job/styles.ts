import styled from 'styled-components'

export const JobCard = styled.li`
  background-color: ${({ theme }) => theme.secundaryColor};
  border: 1px solid ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.mainColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.secundaryColor};

    a {
      background-color: ${({ theme }) => theme.secundaryColor};
      color: ${({ theme }) => theme.mainColor};
      border-color: ${({ theme }) => theme.mainColor};
    }
  }
`

export const JobLink = styled.a`
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.secundaryColor};
  border-color: ${({ theme }) => theme.secundaryColorColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const JobTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
