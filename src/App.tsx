import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './global'

import Header from './components/Header'
import Hero from './components/Hero'
import JobsSection from './containers/JobsSection'

import LightTheme from './themes/light'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <JobsSection />
      </Container>
    </ThemeProvider>
  )
}

export default App
