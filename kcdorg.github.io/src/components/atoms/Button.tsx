import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { GREY, PRIMARY_PINK } from '../../styles/constants'

const PRIMARY_COLOR = PRIMARY_PINK

const Button = styled.button`
  height: 38px;
  line-height: 38px;
  font-size: 15px;
  /* font-weight: bold; */
  text-align: center;
  color: #ffffff;
  border: 0;
  outline: 0;
  border-radius: 2px;
  background-color: ${PRIMARY_COLOR};
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${darken(0.2, PRIMARY_COLOR)};
  }

  &:active {
    background-color: ${lighten(0.2, PRIMARY_COLOR)};
  }

  ${(p: any) =>
    p.width &&
    css`
      width: ${p.width};
    `};

  ${(p: any) =>
    p.height &&
    css`
      height: ${p.height};
    `};

  ${(p: any) =>
    p.large &&
    css`
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    `};

  ${(p: any) =>
    p.shining &&
    css`
      box-shadow: 0 0 8px 0 rgba(255, 53, 53, 0.5);
    `};

  ${(p: any) =>
    p.color &&
    css`
      background-color: ${p.color};

      &:hover,
      &:focus {
        background-color: ${darken(0.2, p.color)};
      }

      &:active {
        background-color: ${lighten(0.2, p.color)};
      }
    `};

  &:disabled {
    background-color: ${GREY} !important;
    cursor: default;
  }

  ${(p: any) =>
    p.disabled &&
    css`
      background-color: ${GREY} !important;
      box-shadow: none;
      cursor: default;
      pointer-events: none;
    `};
`
export default Button
