import { h } from 'preact';
import {
  LayoutProps,
  layout,
  FlexProps,
  flex,
  BackgroundProps,
  background,
  border,
  BorderProps,
} from 'styled-system';
import styled from 'styled-components';

type ContainerProps = LayoutProps & FlexProps & BackgroundProps & BorderProps;

const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <Div {...props}>{children}</Div>
);

const Div = styled.div<ContainerProps>`
  display: flex;
  ${layout}
  ${flex}
  ${background}
  ${border}
`;

export default Container;
