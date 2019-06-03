import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  /* min-height: 380px; */
  text-align: center;
  margin: 10px;
  box-shadow: 0 0 16px 0 rgba(32, 32, 47, 0.16);
  background: #23233f;
  padding: 3px;

  width: 100%;
  max-width: 330px;
`

const Head = styled.div`
  background: #23233f;
  padding: 30px;
  border: 2px solid white;

  @media ${ON_MOBILE} {
    padding: 20px 60px;
  }
`

const CardTitle = styled.div`
  font-size: 16px;
  color: white;
`

const CardPrice = styled.div`
  font-size: 45px;
  margin-top: 20px;
  color: white;

  @media ${ON_MOBILE} {
    font-size: 38px;
  }
`

const PriceUnit = styled.span`
  font-size: 20px;
`

const ButtonRow = styled.div`
  margin-top: 10px;
  text-align: center;
`

const Button = styled.button`
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

const PriceSection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="가격" iconClass="fa fa-ticket fa-2x">
    <Wrapper>
      <Card>
        <Head>
          <CardTitle>중고생</CardTitle>
          <CardPrice>
            5,000 <PriceUnit>원</PriceUnit>
          </CardPrice>
        </Head>
      </Card>
      <Card>
        <Head>
          <CardTitle>일반</CardTitle>
          <CardPrice>
            22,000 <PriceUnit>원</PriceUnit>
          </CardPrice>
        </Head>
      </Card>
    </Wrapper>
    <ButtonRow>
      <a target="_blank" href="https://festa.io/events/200">
        <Button>티켓 구입</Button>
      </a>
    </ButtonRow>
  </SectionTemplate>
)

export default PriceSection
