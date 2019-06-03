import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
  background: #20202f;
  text-align: center;
  color: white;
`

const Logo = styled.img`
  width: 125px;
`

const SocialIconRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const SocialIcon = styled.a`
  margin: auto 5px;
  color: white;
  text-decoration: none;
`

const CC = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 30px;

  a {
    color: gold;
    text-decoration: none;
  }
`

const Footer: React.StatelessComponent<{}> = () => (
  <Wrapper>
    <Logo src="kcd2019-white.png" />
    <SocialIconRow>
      <SocialIcon
        className="fa fa-facebook"
        aria-hidden="true"
        target="_blank"
        href="https://www.facebook.com/KoreaCommunityDay"
      />
    </SocialIconRow>
    <CC>
      © Powered by{' '}
      <a target="_blank" href="https://festa.io">
        Festa !
      </a>
    </CC>
  </Wrapper>
)

export default Footer
