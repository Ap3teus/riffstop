import { TypographyStyle, theme } from '../theme';
import * as React from 'react';
import styled, { StyledComponentProps, css } from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { h } from 'preact';

const typographyComponentFactory: (
  style: TypographyStyle,
) => React.FC<Omit<TypographyStyle, 'tag'>> = ({ tag, ...style }) => ({
  children,
  ...props
}) => (
  <Element {...style} {...props} as={tag as any}>
    {children}
  </Element>
);

export const Heading = typographyComponentFactory(theme.typography.heading);
export const Body = typographyComponentFactory(theme.typography.body);
export const Link = typographyComponentFactory(theme.typography.link);

const Element = styled.span<Omit<TypographyStyle, 'tag'>>`
  ${typography}
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration};`}
  ${(props) => props.cursor && `cursor: ${props.cursor};`}
  ${(props) => props.hover && `&:hover { ${css(props.hover)} }`}
`;
