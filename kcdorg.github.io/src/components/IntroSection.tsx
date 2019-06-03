import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 30px 40px;
  border: 5px solid #f83600;
  margin: 10px;
  font-size: 32px;
  text-align: center;
  color: #5e5e5e;
  word-break: keep-all;

  @media ${ON_MOBILE} {
    font-size: 23px;
    padding: 30px 20px;
  }
`

const Bold = styled.span`
  font-weight: bold;
  font-size: 35px;
  color: #3a3a3a;

  @media ${ON_MOBILE} {
    font-size: 25px;
  }
`

// const List = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   max-width: 500px;
//   margin: 10px;
//   font-size: 20px;
// `

// interface CardProps {
//   background: string
// }

// const Card = styled.div`
//   width: 100%;
//   min-width: 300px;
//   max-width: 400px;
//   background: ${(p: CardProps) => p.background};
//   padding: 30px 40px;
//   margin: 10px;
//   color: #555578;
// `

// const TitleWrapper = styled.div``

// const LeftTitle = styled.div`
//   line-height: 1.1;
//   margin: 10px 0 0 50px;
//   font-size: 2.1rem;
//   font-weight: 600;
//   @media ${ON_MOBILE} {
//     font-size: 25px;
//   }
// `

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`

const LogoImage = styled.img`
  height: 500px;
  @media ${ON_MOBILE} {
    height: 400px;
  }
`

const IntroSection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="" iconClass="">
    {/* <LeftTitle>
      Community에 의한,
      <br />
      Community를 위한,
      <br />
      대한민국 최대 규모의
      <br />
    </LeftTitle> */}
    <Wrapper>
      <ImageWrapper>
        <LogoImage src="main-logo.png" />
      </ImageWrapper>
      <Title>
        커뮤니티의,
        <br />
        커뮤니티에 의한,
        <br />
        커뮤니티를 위한
        <br />
        <br />
        <Bold>
          대한민국 최대 규모의
          <br />
          커뮤니티 소통의 장!
        </Bold>
      </Title>

      {/* <List>
        <p>
          1. 즐기자 Tech! 배우자 Community! 기술을 즐기며 커뮤니티를 알아가는
          만남의 장!
        </p>
        <p>2. 다양한 커뮤니티들의 다양한 Tech Session</p>
        <p>3. 커뮤니티와 함께 직접 기술을 체험할 수 있는 Workshop</p>
        <p>4. 참가 커뮤니티에 대해 알고 소통할 수 있는 커뮤니티 전시 공간</p>
      </List> */}

      {/* <CardRow>
        <Card background="#85144b">
          즐기자 Tech! 배우자 Community! 기술을 즐기며 커뮤니티를 알아가는
          만남의 장!
        </Card>
        <Card background="#39CCCC">
          다양한 커뮤니티들의 다양한 Tech Session
        </Card>
        <Card background="#3D9970">
          커뮤니티와 함께 직접 기술을 체험할 수 있는 Workshop
        </Card>
        <Card background="#FFDC00">
          참가 커뮤니티에 대해 알고 소통할 수 있는 커뮤니티 전시 공간
        </Card>
      </CardRow> */}
    </Wrapper>
  </SectionTemplate>
)

export default IntroSection
