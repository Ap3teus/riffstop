import styled from 'styled-components';
import { GridArea, Grid, GridAreaProps } from './Grid';
import { h } from 'preact';
import { theme } from '../theme';
import Container from './Container';
import { Spacing } from './Spacing';
import { Heading } from './Typography';

type CardProps = GridAreaProps & {
  header?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ header, children, ...props }) => (
  <GridArea
    padding={`${theme.spacing(4)}px ${theme.spacing(6)}px`}
    background={theme.colors.gray.primary(3)}
    {...props}
    flexDirection="column"
  >
    <Container justifyContent="flex-end">
      {typeof header === 'string' ? <Heading>{header}</Heading> : header}
    </Container>
    <Spacing dir="y" size={4} />
    <Container>{children}</Container>
  </GridArea>
);

export default Card;
