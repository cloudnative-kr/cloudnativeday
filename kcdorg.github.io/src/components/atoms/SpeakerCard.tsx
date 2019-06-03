import * as React from 'react'
import styled from 'styled-components'
import { ON_MOBILE } from './Responsive'

const Padding = styled.div`
  box-sizing: border-box;
  padding: 15px 10px;

  @media ${ON_MOBILE} {
    padding: 0;
  }
`

const Wrapper = styled.div`
  transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  margin-bottom: 20px;
  padding: 20px 20px;
  box-shadow: 0 0 8px 0 rgba(32, 32, 47, 0.16);
  text-align: center;
  white-space: pre-wrap;
  &:hover {
    box-shadow: 3px 2px 29px 0 rgba(0, 0, 0, 0.09);
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: auto 2px;
  object-fit: cover;
`

const Community = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  color: #777;
`

const Name = styled.div`
  margin-top: 16px;
  font-size: 16px;
`

const Text = styled.div`
  margin-top: 25px;
  font-size: 14px;
  font-weight: 300;
  color: #6b7684;
  text-align: left;
  line-height: 1.8;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Profile = Text.extend`
  word-break: break-word;
`

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  word-break: keep-all;
`

const Content = Text.extend``

export interface SpeakerCardProps {
  community: string
  name: string
  images: [string]
  profile: string
  title: string
  content: string
}

const SpeakerCard: React.StatelessComponent<SpeakerCardProps> = ({
  community,
  name,
  images,
  profile,
  title,
  content,
  ...props
}) => (
  <Padding key={name} {...props}>
    <Wrapper>
      <Title>{title}</Title>
      <Community>{community}</Community>
      <Content>{content}</Content>
      <ImageRow>
        {images.map(image => (
          <Image key={image} src={image} />
        ))}
      </ImageRow>
      <Name>{name}</Name>
      <Profile>{profile}</Profile>
    </Wrapper>
  </Padding>
)

export default SpeakerCard
