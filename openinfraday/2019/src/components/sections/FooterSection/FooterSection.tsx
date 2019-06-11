import React, { FC } from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container/Container'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  background: rgb(26, 27, 30);
  padding-top: 100px;
  padding-bottom: 10px;
`

const BrandBox = styled.div`
  max-width: 260px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;

  * {
    display: inline-block;
  }

  @media ${ON_MOBILE} {
    max-width: 200px;
  }
`

const Disclaimer = styled.div`
  margin-top: 100px;
  font-family: Spoqa Han Sans;
  font-size: 13px;
  color: white;
`

const FooterSection: FC = () => (
  <StyledContainer>
    <BrandBox>
      {/* <FestaLogo size={100} /> */}
      {/* <XIcon size={50} /> */}
      {/* <img src={OpenStackLogo} width="100px" /> */}
      <img src="/icons/festa_openstack_collabo.svg" width="100%" />
    </BrandBox>
    <Disclaimer>
      Designed and built by Kevin Jin and Jihoon Kim at Festa.io
      <br />
      Homepage hosting is supported by{' '}
      <a href="https://d2.naver.com/home">
        <img
          src="/sponsors/naver-d2.png"
          width="64"
          height="auto"
          alt="Naver D2"
        />
      </a>
      .
      <br />
      Copyright (c) 2018 OpenStack Korea User Group and Festa.io All Rights
      Reserved.
    </Disclaimer>
  </StyledContainer>
)

export default FooterSection
