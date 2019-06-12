import React, { Fragment } from 'react'
import { configure, addDecorator } from '@storybook/react'
// import GlobalStyle from 'styles/globals'
import { Normalize } from 'styled-normalize'

const req = require.context(
  '../src/components',
  true,
  /\.stories\.(tsx|js|jsx)$/,
)

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

/**
 * TODO: Use only necessary icons
 * @example
 * import { faCheck, faTicketAlt } from '@fortawesome/fontawesome-free-solid'
 * fontawesome.library.add(faCheck, faTicketAlt)
 */
// fontawesome.library.add(solids)
// fontawesome.library.add(faFacebook, faGoogle)

//React Router Link, Global Styles 등 기본적인 decorators 추가
const withDecorators = story => (
  <Fragment>
    {story()}
    {/* <GlobalStyle /> */}
    <Normalize />
  </Fragment>
)

addDecorator(withDecorators)

configure(loadStories, module)
