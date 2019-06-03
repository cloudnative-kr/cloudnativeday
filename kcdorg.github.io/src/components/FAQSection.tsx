import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import * as faqsJson from '../data/faqs.json'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  @media ${ON_MOBILE} {
    font-size: 14px;
  }
`

const Card = styled.div`
  margin: 16px auto;
  max-width: 700px;
  box-shadow: 0 0 16px 0 rgba(32, 32, 47, 0.16);
  cursor: pointer;
`

const Head = styled.div`
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
`

const DownIcon = styled.span.attrs({
  className: 'fa fa-angle-down',
})`
  margin-left: auto;
`

interface ContentProps {
  active: boolean
}

const Content = styled.div`
  box-sizing: border-box;
  color: #66667f;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  transition: all 0.2s ease-in-out;
  height: ${(p: ContentProps) => (p.active ? 'auto' : '0')};
  padding: ${(p: ContentProps) => (p.active ? '20px 30px' : '0')};
  opacity: ${(p: ContentProps) => (p.active ? '1' : '0')};
  white-space: pre-line;
`

interface FAQProps {
  title: string
  content: string
  index: number
}

interface FAQData {
  title: string
  content: string
}

class FAQSection extends React.Component<{}> {
  state = {
    activeIndex: -1,
  }

  handleClick = (index: number) => {
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: -1 })
    } else {
      this.setState({ activeIndex: index })
    }
  }

  isActive = (index: number) => {
    return this.state.activeIndex === index
  }

  renderFAQ = ({ title, content, index }: FAQProps) => (
    <Card onClick={() => this.handleClick(index)}>
      <Head>
        {title} <DownIcon />
      </Head>
      <Content active={this.isActive(index)}>A. {content}</Content>
    </Card>
  )

  mapFAQ = (faqs: [FAQData]) => {
    return faqs.map((faq, index) => {
      return this.renderFAQ({ ...faq, index })
    })
  }

  render() {
    return (
      <SectionTemplate title="FAQ" iconClass="fa fa-question fa-2x">
        <Wrapper>{this.mapFAQ(faqsJson.faqs)}</Wrapper>
      </SectionTemplate>
    )
  }
}
export default FAQSection
