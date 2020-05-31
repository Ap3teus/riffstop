import { h } from 'preact';
import {
  LayoutProps,
  layout,
  BackgroundProps,
  background,
  border,
  BorderProps,
  margin,
  MarginProps,
  flexbox,
  FlexboxProps,
  GridProps,
  grid,
  PaddingProps,
  padding,
  SpaceProps,
  space,
} from 'styled-system';
import styled from 'styled-components';

export type ContainerProps = LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  MarginProps &
  GridProps &
  PaddingProps &
  SpaceProps;

const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <Div {...props}>{children}</Div>
);

const Div = styled.div<ContainerProps>`
  display: flex;
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${margin}
  ${grid}
  ${padding}
  ${space}
`;

export default Container;
