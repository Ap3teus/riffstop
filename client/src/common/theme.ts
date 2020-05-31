import * as d3 from 'd3-color';
import { TypographyProps } from 'styled-system';
import { CSSObject } from 'styled-components';

const color = (hex: string) => (steps = 0) =>
  d3
    .color(hex)
    ?.brighter(steps / 2)
    .hex() ?? hex;

export type TypographyStyle = TypographyProps & {
  tag: keyof JSX.IntrinsicElements;
  textDecoration?: React.CSSProperties['textDecoration'];
  cursor?: React.CSSProperties['cursor'];
  hover?: CSSObject;
};

type Typography = 'heading' | 'body' | 'link';

const colors = {
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
};

const typography: Record<Typography, TypographyStyle> = {
  heading: {
    tag: 'h1',
    fontSize: 36,
    fontWeight: 'bold',
  },
  body: {
    tag: 'span',
    fontSize: 24,
  },
  link: {
    tag: 'a',
    fontSize: 24,
    textDecoration: 'underline',
    cursor: 'pointer',
    hover: {
      color: colors.white(-2),
    },
  },
};

export const theme = {
  colors,
  typography,
  iconSizes: {
    large: 42,
  },
  spacing: (steps = 4) => 2 ** steps,
};
