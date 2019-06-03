import React, { FC } from 'react'
import styled from 'styled-components'
import Header from 'components/atoms/Header'
import Button from 'components/atoms/Button'
import * as logo from './logo.svg'

const Wrapper = styled.div``

const Banner = styled.div`
  background-color: black;
  text-align: center;
  padding: 30px;
`

interface FrontPageProps {
  title: string
}

const FrontPage: FC<FrontPageProps> = ({ title }) => {
  return (
    <Wrapper>
      <Banner>
        <img src={logo} width="100px" />
        <Header>{title}</Header>
        <Button backgroundColor="#eab">button</Button>
      </Banner>
    </Wrapper>
  )
}

export default FrontPage
