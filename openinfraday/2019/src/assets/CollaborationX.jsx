import React from 'react'
import styled from 'styled-components'

const Adjuster = styled.div`
  margin: 3px 5px 0 8px;
`

const Wrapper = styled.i`
  display: inline-block;
`

const WHITE = '#fff'
const WIDTH = '76px'
const HEIGHT = '77px'
const RATIO = HEIGHT / WIDTH

const CollaborationX = ({ size = 10, color = WHITE }) => (
  <Adjuster>
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 100 100`}
        width={size}
        // height={size * RATIO}
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill={color}
          strokeLinecap="square"
        >
          <g
            id="Group"
            transform="translate(8.000000, 9.000000)"
            stroke={color}
            strokeWidth="14"
          >
            <path d="M0.5,0.5 L58.6377674,58.6377674" id="Line" />
            <path
              d="M0.5,0.5 L58.6377674,58.6377674"
              id="Line"
              transform="translate(29.500000, 29.500000) scale(1, -1) translate(-29.500000, -29.500000) "
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  </Adjuster>
)

export default CollaborationX
