import * as React from 'react'
import styled from 'styled-components'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  text-align: center;
  background: url('namsan.png') no-repeat center center;
  background-size: cover;
  padding-top: 110px;
  padding-bottom: 150px;
`

const Logo = styled.img`
  width: 125px;
`

const Title = styled.h1`
  max-width: 730px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  /* border: 6px solid white; */
  padding: 0px 20px;
  font-size: 54px;
  font-weight: bold;
  line-height: 1;
  color: white;

  @media ${ON_MOBILE} {
    max-width: 570px;
    border: none;
    padding: 0;
    font-size: 40px;
  }
`

const SubTitle = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: white;
  font-weight: 300;

  @media ${ON_MOBILE} {
    white-space: pre-line;
    font-size: 12px;
  }
`

const RegisterButton = styled.button`
  margin-top: 40px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 300;
  color: white;
  padding: 17px 20px;
  background: #20202f;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`

// const NewRegisterButton = styled.button`
//   margin-top: 20px !important;
//   padding: 12px 20px;
//   display: block;
//   margin: auto;
//   box-sizing: border-box;
//   color: white;
//   font-weight: 600;
//   font-size: 16px;
//   font-weight: 300;
//   background: none;
//   border-radius: 4px;
//   border: 2px solid #fff;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     background: white;
//     color: black;
//   }
// `

const Top = styled.div`
  max-width: 450px;
  max-height: 128px;
  border-left: 14px solid white;
  border-right: 14px solid white;
  border-top: 14px solid white;
  /* width: 100%; */
  height: 100%;
  margin: 0 auto;
  font-size: 24px;
  line-height: 27px;
  padding: 85px 0 0;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 416px) {
    margin: 0 20px;
  }

  @media ${ON_MOBILE} {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
  }
`

const Bottom = styled.div`
  border-left: 14px solid white;
  border-right: 14px solid white;
  border-bottom: 14px solid white;
  max-width: 450px;
  max-height: 128px;
  /* margin-left: 20px;
  margin-right: 20px; */
  /* width: 100%; */
  height: 100%;
  margin: 0 auto;
  color: #fff;
  padding-bottom: 85px;
  line-height: 2;

  text-align: center;

  @media screen and (max-width: 416px) {
    margin: 0 20px;
  }

  @media ${ON_MOBILE} {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
  }
`

const Header: React.StatelessComponent<{}> = () => (
  <Wrapper>
    <Top>
      <Logo src="kcd2019-white.png" />
    </Top>
    <Title>Korea Community Day 2019</Title>
    <Bottom>
      2019년 2월 23일(토) 10:30 / Microsoft Korea 11층
      <a target="_blank" href="https://festa.io/events/200">
        {/* <NewRegisterButton>티켓 구매</NewRegisterButton> */}
      </a>
    </Bottom>
    <SubTitle />
    <a target="_blank" href="https://festa.io/events/200">
      <RegisterButton>티켓 구매하러 가기</RegisterButton>
    </a>
  </Wrapper>
)

export default Header
