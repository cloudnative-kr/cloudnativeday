import React, { FC } from 'react'
import styled from 'styled-components/macro'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import sponsorsData from '../../../data/sponsors.json'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  background: url('/backgrounds/footer_lodyas.png') no-repeat center center
    fixed;
  background-size: cover;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
`

const Label = styled.div<{ shadowColor: string }>`
  flex: 1;
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: 0px 0px 15px ${p => p.shadowColor};
  min-width: 250px;

  @media ${ON_MOBILE} {
    font-size: 35px;
    margin-bottom: 20px;
  }
`

const CardGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 240px 240px 240px;
  max-width: 720px;

  @media ${ON_MOBILE} {
    grid-template-columns: 160px 160px;
    flex: 0;
  }
`

const ImageCard = styled.div`
  border-radius: 2px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(123, 136, 157, 0.15);
  height: 190px;
  padding: 0 20px;
  margin: 5px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media ${ON_MOBILE} {
    height: 150px;
    padding: 0 15px;
  }
`

interface Sponsor {
  src: string
  alt: string
  href?: string
}

const Image: FC<Sponsor> = ({ src, alt }) => (
  <ImageCard>
    <img src={src} alt={alt} />
  </ImageCard>
)

const SponsorsSection: FC = () => {
  const renderImageGrid = (items: Sponsor[]) => {
    return (
      <CardGrid>
        {items.map(item => (
          <a href={item.href} target="_blank">
            <Image key={item.alt} src={item.src} alt={item.alt} />
          </a>
        ))}
      </CardGrid>
    )
  }

  return (
    <StyledContainer>
      <InnerContainer>
        <Header white={true}>Sponsors</Header>
        <Row>
          <Label shadowColor="lightblue">플래티넘</Label>
          {renderImageGrid(sponsorsData.platinum)}
        </Row>

        <Row>
          <Label shadowColor="gold">골드</Label>
          {renderImageGrid(sponsorsData.gold)}
        </Row>

        <Row>
          <Label shadowColor="silver">실버</Label>
          {renderImageGrid(sponsorsData.silver)}
        </Row>

        <Row>
          <Label shadowColor="black">후원</Label>
          {renderImageGrid(sponsorsData.general)}
        </Row>

        <Row>
          <Label shadowColor="black">미디어 후원</Label>
          {renderImageGrid(sponsorsData.media)}
        </Row>
      </InnerContainer>
    </StyledContainer>
  )
}

export default SponsorsSection
