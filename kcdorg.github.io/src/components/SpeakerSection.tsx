import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import * as speakersJson from '../data/speakers.json'
import SpeakerCard, { SpeakerCardProps } from './atoms/SpeakerCard'
const StackGrid = require('react-stack-grid').default
const slice = require('lodash/slice')
import { ON_MOBILE } from './atoms/Responsive'

const CardRow = styled.div`
  padding: 0 30px;

  @media ${ON_MOBILE} {
    padding: 0 10px;
  }
`

const MoreButton = styled.button`
  display: block;
  box-sizing: border-box;
  width: 90px;
  height: 44px;
  font-size: 16px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
  margin: auto;
  margin-top: 25px;
`

class SpeakerSection extends React.Component<{}> {
  state = {
    showMore: false
  }

  handleMoreClick = () => {
    this.setState({ showMore: true })
  }

  render() {
    const speakers = this.state.showMore
      ? speakersJson.speakers
      : slice(speakersJson.speakers, 0, 8)

    return (
      <SectionTemplate title="발표자" iconClass="fa fa-microphone fa-2x">
        <CardRow>
          <StackGrid columnWidth={280} gutterWidth={10}>
            {speakers.map((item: SpeakerCardProps) => (
              <SpeakerCard {...item} />
            ))}
          </StackGrid>
        </CardRow>
        {this.state.showMore || (
          <MoreButton onClick={this.handleMoreClick}>더 보기</MoreButton>
        )}
      </SectionTemplate>
    )
  }
}

export default SpeakerSection
