import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { darken, lighten } from 'polished'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import { Flex, Box } from '@rebass/grid'
import { ON_MOBILE } from '../../../constants/responsive'
import Button from '../../atoms/Button/Button'

const LETTER_SPACING = '1.4'
const LINE_HEIGHT = '1.1'
const BUTTON_COLOR = '#333333'

const Buy = styled(Button)`
  line-height: 38px;
  font-size: 25px !important;
  text-align: center;
  /* color: #ffffff; */
  border: 0;
  outline: 0;
  border-radius: 2px;
  background-color: ${BUTTON_COLOR};
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${darken(0.2, BUTTON_COLOR)};
    text-shadow: 0px 0px 15px lightblue;
  }

  &:active {
    background-color: ${lighten(0.2, BUTTON_COLOR)};
  }

  @media ${ON_MOBILE} {
    font-size: 22px !important;
    width: 200px;
    height: 80px;
  }
`

const TicketHeader = styled(Header)`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 150px;
  letter-spacing: -1px;
  @media ${ON_MOBILE} {
    font-size: 40px !important;
    padding-bottom: 80px;
  }
`

const StyledContainer = styled(Container)`
  flex-wrap: wrap;
  background: #f8f8fa;
  padding: 70px 60px 100px 60px;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: ${LETTER_SPACING};
  line-height: ${LINE_HEIGHT};
  * {
    font-weight: bold;
    font-size: 50px;
    letter-spacing: ${LETTER_SPACING};
    line-height: ${LINE_HEIGHT};
    @media ${ON_MOBILE} {
      font-size: 30px;
    }
    @media screen and (max-width: 30em) {
      font-size: 20px;
    }
  }

  @media ${ON_MOBILE} {
    font-size: 30px;
  }
`
const border = {
  borderRight: '2px dashed black',
}

// const Row = styled.div`
//   margin: 50px 2rem 0 2rem;
// `

const Line = styled.hr`
  border-top: 6px solid black;
  margin-bottom: 10px;
  @media ${ON_MOBILE} {
    border-top: 4px solid black;
    margin-bottom: 6px;
  }
`

// const HeaderSection = styled.section`
//   justify-content: flex-end;
//   width: 100%;
//   margin-right: 100px;
// `

const Card = styled.div`
  display: block;
  background-color: #fff;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  margin-bottom: 70px;
  /* box-shadow: 0 4px 8px 0 rgba(194, 194, 194, 0.5); */

  @media ${ON_MOBILE} {
    margin-bottom: 40px;
  }
`

const TicketTitle = styled.div`
  width: 100%;
  text-align: left;
  font-size: 48px;
  color: black;
  margin-bottom: -5px;
  white-space: pre-line;
  @media ${ON_MOBILE} {
    font-size: 30px;
  }
  @media screen and (max-width: 30em) {
    font-size: 20px;
  }
`

const TicketContent = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  word-break: keep-all;

  @media ${ON_MOBILE} {
    font-size: 15px;
  }
  @media screen and (max-width: 30em) {
    font-size: 13px;
  }
`

const PriceLabel = styled.div`
  font-family: 'Montserrat';
  width: 100%;
  margin-bottom: 15px;
  @media ${ON_MOBILE} {
    margin-bottom: 5px;
  }
`
const Price = styled.div`
  font-family: 'Montserrat';
  width: 100%;
`

const TicketIconWrapper = styled.img`
  height: 180px;
  width: auto;
  margin-bottom: -50px;
  margin-top: -10px;
  @media screen and (max-width: 70em) {
    display: none;
  }
`

interface TicketItemProps {
  title: string
  contents: string[]
  price: string
}

const TicketItem: FC<TicketItemProps> = ({ title, contents, price }) => (
  <Card>
    <Flex flexWrap="wrap">
      <Box style={border} py={[20, 30, 40]} px={[30, 50, 100]} width={7 / 10}>
        <TicketTitle>{title}</TicketTitle>
        <Box width={[9 / 10, 7 / 10]}>
          <Line />
        </Box>
        <Box width={[1 / 10, 3 / 10]} />
        <Box width={1}>
          {contents.map(content => (
            <TicketContent key={content}>{content}</TicketContent>
          ))}
        </Box>
      </Box>
      <Box pb={[20, 20, 40]} pt={[20, 30, 40]} px={[15, 15, 27]} width={3 / 10}>
        <PriceLabel>price</PriceLabel>
        <Price>{price} won</Price>
        <TicketIconWrapper src="/TicketIcon.svg" />
      </Box>
    </Flex>
  </Card>
)

interface TicketsSectionProps {
  handleTicketBuy: () => void
}

const TicketsSection: FC<TicketsSectionProps> = ({ handleTicketBuy }) => (
  <StyledContainer>
    <InnerContainer>
      <TicketHeader>Tickets</TicketHeader>
    </InnerContainer>
    <TicketItem
      title={`양일 티켓 \n(Day1 + 2)`}
      contents={['18, 19일 참가권입니다.', '워크샵을 신청하실 수 있습니다.']}
      price={'30,000'}
    />
    <TicketItem
      title={`학생 티켓`}
      contents={[
        '18, 19일 참가권입니다.',
        '학생 신분을 증명할 수 있는 서류를 사무국 메일(event@plan9.co.kr)로 전달해 주셔야 합니다.',
      ]}
      price={'20,000'}
    />
    <Flex justifyContent="center" alignItems="center">
      <Box py={[50, 20]}>
        <Buy
          onClick={handleTicketBuy}
          width={'320px'}
          height={'100px'}
          color="#333"
        >
          티켓 구매
        </Buy>
      </Box>
    </Flex>
  </StyledContainer>
)

export default TicketsSection
