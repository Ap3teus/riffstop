import styled from 'styled-components';
import { GridArea, Grid, GridAreaProps } from './Grid';
import { h } from 'preact';
import { theme } from '../theme';
import Container from './Container';
import { Spacing } from './Spacing';

export const Card: React.FC<GridAreaProps> = ({ children, ...props }) => (
  <GridArea
    padding={`${theme.spacing(5)}px ${theme.spacing(6)}px`}
    background={theme.colors.gray.primary(3)}
    {...props}
    flexDirection="column"
  >
    <Container>Header</Container>
    <Spacing dir="y" size={4} />
    <Container>{children}</Container>
  </GridArea>
);

export default Card;
