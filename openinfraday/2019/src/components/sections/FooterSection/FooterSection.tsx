import React, { FC } from 'react'
import styled from 'styled-components/macro'
import Container from '../../atoms/Container/Container'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  background: rgb(26, 27, 30);
  padding-top: 50px;
  padding-bottom: 10px;

  @media ${ON_MOBILE} {
    padding-top: 30px;
  }
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
  margin-top: 50px;
  font-family: Spoqa Han Sans;
  font-size: 13px;
  color: white;

  @media ${ON_MOBILE} {
    margin-top: 30px;
  }
`

const TextSponser = styled.a`
  text-decoration: none;
  font-family: Spoqa Han Sans;
  font-size: 15px;
  color: white;
  font-weight: bolder;
  padding-left: 5px;
`

const FooterSection: FC = () => (
  <StyledContainer>
    <BrandBox>
      {/* <FestaLogo size={100} /> */}
      {/* <XIcon size={50} /> */}
      {/* <img src={OpenStackLogo} width="100px" /> */}
      {/* <img src="/icons/festa_openstack_collabo.svg" width="100%" /> */}
    </BrandBox>
    <Disclaimer>
      {/* Designed and built by Kevin Jin and Jihoon Kim at Festa.io
      <br /> */}
      Homepage hosting is supported by{'  '}
      <TextSponser href="https://toast.com">NHN TOAST</TextSponser>
      .
      <br /> */} Copyright (c) 2019 국내 오픈소스 커뮤니티 연합 and Festa.io
    </Disclaimer>
  </StyledContainer>
)

export default FooterSection
