import * as React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import SpeakerSection from './components/SpeakerSection'
import SimpleScheduleSection from './components/SimpleScheduleSection'
import LocationSection from './components/LocationSection'
import PatronSection from './components/PatronSection'
import PriceSection from './components/PriceSection'
import FAQSection from './components/FAQSection'
import CommunitySection from './components/CommunitySection'
import InquirySection from './components/InquirySection'
import NavigationBar from './components/Navigation'
import { Element } from 'react-scroll'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  a {
    text-decoration: none !important;
  }
`

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Wrapper>
          <Header />
          <IntroSection />
          <Element name="schedule">
            <SimpleScheduleSection />
          </Element>
          <Element name="speakers">
            <SpeakerSection />
          </Element>
          <Element name="location">
            <LocationSection />
          </Element>
          <PriceSection />
          <Element name="faq">
            <FAQSection />
          </Element>
          <Element name="sponsers">
            <PatronSection />
          </Element>
          <Element name="community">
            <CommunitySection />
          </Element>
          <InquirySection />
          <Footer />
        </Wrapper>
      </>
    )
  }
}

export default App
