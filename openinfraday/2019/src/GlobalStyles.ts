import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { fontFace } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    font-family: Spoqa Han Sans;
    font-size: 16px;
    line-height: 1.5;
  }


  * {
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD1',
    fontWeight: '100',
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD3',
    fontWeight: '300',
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD5',
    fontWeight: '500',
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'CoreGTD',
    fontFilePath: '/fonts/CoreGTD9',
    fontWeight: '900',
    fileFormats: ['woff'],
  })}

  ${fontFace({
    fontFamily: 'Spoqa Han Sans',
    fontFilePath: '/fonts/SpoqaHanSansBold',
    fontWeight: '700',
    localFonts: ['Spoqa Han Sans Bold'],
    fileFormats: ['woff2', 'woff', 'ttf'],
  })}

  ${fontFace({
    fontFamily: 'Spoqa Han Sans',
    fontFilePath: '/fonts/SpoqaHanSansRegular',
    fontWeight: '400',
    localFonts: ['Spoqa Han Sans Regular'],
    fileFormats: ['woff2', 'woff', 'ttf'],
  })}

  ${fontFace({
    fontFamily: 'Spoqa Han Sans',
    fontFilePath: '/fonts/SpoqaHanSansLight',
    fontWeight: '300',
    localFonts: ['Spoqa Han Sans Light'],
    fileFormats: ['woff2', 'woff', 'ttf'],
  })}

  ${fontFace({
    fontFamily: 'Spoqa Han Sans',
    fontFilePath: '/fonts/SpoqaHanSansThin',
    fontWeight: '100',
    localFonts: ['Spoqa Han Sans Thin'],
    fileFormats: ['woff2', 'woff', 'ttf'],
  })}

`

export default GlobalStyle
