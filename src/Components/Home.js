import React from 'react'
import sc from 'styled-components'

import { light } from '../Utility/theme.config'

export const Home = () => {
  return(
    <Container>
      <h2>Sign Up</h2>
    </Container>
  )
}


const Container = sc.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: ${light.primary}
`;