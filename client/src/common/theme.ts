import * as d3 from 'd3-color';

const color = (hex: string) => (steps = 0) =>
  d3
    .color(hex)
    ?.brighter(steps / 2)
    .hex() ?? hex;

export const theme = {
  colors: {
    gray: {
      primary: color('#232020'),
      secondary: color('#546A7B'),
    },
    blue: {
      primary: color('#00A6FB'),
      secondary: color('#4059AD'),
    },
    white: color('#CECCCC'),
    red: ['#ff0000'],
  },
};
