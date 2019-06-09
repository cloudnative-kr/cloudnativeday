import React, { FC } from 'react'
import styled from 'styled-components/macro'
// import Header from 'components/atoms/Header'
// import Button from 'components/atoms/Button'

const Wrapper = styled.div``

const Banner = styled.div`
  background-color: black;
  text-align: center;
  padding: 30px;
`

interface LandingPageProps {
  title: string
}

const LandingPage: FC<LandingPageProps> = ({ title }) => {
  return (
    <Wrapper>
      <Banner>
        {/* <img src={logo} width="100px" /> */}
        <div>{title}</div>
        {/* <Header>{this.props.title}</Header> */}
        {/* <Button backgroundColor="#eab">button</Button> */}
      </Banner>
    </Wrapper>
  )
}

export default LandingPage
