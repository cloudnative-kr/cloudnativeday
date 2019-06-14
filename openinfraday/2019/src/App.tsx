import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './GlobalStyles'
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll'
import NavigationBar from './components/atoms/NavigationBar/NavigationBar'
import LandingSection from './components/sections/LandingSection/LandingSection'
import IntroSection from './components/sections/IntroSection/IntroSection'
import InfoSection from './components/sections/InfoSection/InfoSection'
import ScheduleSection from './components/sections/ScheduleSection/ScheduleSection'
// import SpeakersSection from './components/sections/SpeakersSection/SpeakersSection'
import TicketsSection from './components/sections/TicketsSection/TicketsSection'
import SponsorsSection from './components/sections/SponsorsSection/SponsorsSection'
import FAQSection from './components/sections/FAQSection/FAQSection'
import FooterSection from './components/sections/FooterSection/FooterSection'

class App extends Component {
  componentDidMount() {
    const scrollEvent = Events.scrollEvent as any
    scrollEvent.register('begin')
    scrollEvent.register('end')

    scrollSpy.update()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  handleTicketBuy = () => {
    window.open('https://festa.io/events/41', '_blank')
  }

  scrollTo = (element: any) => {
    scroll.scrollTo(element)
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <NavigationBar
          handleScrollTo={this.scrollTo}
          handleTicketBuy={this.handleTicketBuy}
        />
        <LandingSection />
        <IntroSection />
        <Element name="info" className="element">
          <InfoSection />
        </Element>
        <Element name="schedule" className="element">
          <ScheduleSection />
        </Element>
        {/* <Element name="speakers" className="element">
          <SpeakersSection />
        </Element> */}
        <Element name="tickets" className="element">
          <TicketsSection handleTicketBuy={this.handleTicketBuy} />
        </Element>
        <Element name="sponsors" className="element">
          <SponsorsSection />
        </Element>
        <FAQSection />
        <FooterSection />
        <Normalize />
      </div>
    )
  }
}

export default App
