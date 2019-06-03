import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import * as communitiesJson from '../data/communities.json'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 0 16px 0 rgba(32, 32, 47, 0.1);
`

const ImageRow = styled.div`
  box-sizing: border-box;
  padding: 30px 30px;
  height: 140px;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`

const Link = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 5px;
  a {
    color: #3a84fc;
    text-decoration: none;
  }
`

const Body = styled.div`
  padding: 30px 20px;
  text-align: center;
  color: #6b7684;
  font-weight: 300;
  font-size: 15px;
`

interface CommunityData {
  image: string
  title: string
  link: string
  url: string
  content: string
}

const CommunityCard: React.StatelessComponent<CommunityData> = ({
  image,
  title,
  link,
  url,
  content
}) => (
  <Card>
    <ImageRow>
      <Image src={image} />
    </ImageRow>
    <Title>{title}</Title>
    <Link>
      <a target="_blank" href={url}>
        {link}
      </a>
    </Link>
    <Body>{content}</Body>
  </Card>
)

const CommunitySection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="주최 커뮤니티" iconClass="fa fa-hand-peace-o fa-2x">
    <Wrapper>
      {communitiesJson.communities.map((community: CommunityData) => {
        return <CommunityCard key={community.title} {...community} />
      })}
    </Wrapper>
  </SectionTemplate>
)

export default CommunitySection
