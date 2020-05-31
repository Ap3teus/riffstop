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
} from 'styled-system';
import styled from 'styled-components';

export type ContainerProps = LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  MarginProps &
  GridProps;

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
`;

export default Container;
