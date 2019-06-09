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
        <Normalize />
      </div>
    )
  }
}

export default App
