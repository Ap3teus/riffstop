import { TypographyStyle, theme } from '../theme';
import * as React from 'react';
import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { h } from 'preact';

const typographyComponentFactory: (
  style: TypographyStyle,
) => React.FC<TypographyProps> = ({ tag }) => ({ children, ...props }) => (
  <Element {...props} as={tag as any}>
    {children}
  </Element>
);

console.log(theme.typography);

export const Heading = typographyComponentFactory(theme.typography.heading);
export const Body = typographyComponentFactory(theme.typography.body);

const Element = styled.span`
  ${typography}
`;
