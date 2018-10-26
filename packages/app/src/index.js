import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Product from 'shared'

const Container = styled.div`
  background-color: blue;
`

const App = () => (
  <Container>
    <h1>Gustav</h1>
    <p>er sej...</p>
    <Product />
  </Container>
)

ReactDOM.render(<App />, document.getElementById('root'))
