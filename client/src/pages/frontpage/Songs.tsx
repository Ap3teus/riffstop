import Container from '../../common/components/Container';
import { h } from 'preact';
import { Body, Link } from '../../common/components/Typography';
import { theme } from '../../common/theme';
import styled from 'styled-components';

const Songs = () => {
  return <Song />;
};

const Song = () => (
  <Container
    width="100%"
    background={theme.colors.gray.primary()}
    paddingY={2}
    paddingX={4}
  >
    <Container width="50%">
      <Link>Leevi and the Leavings</Link>
    </Container>
    <Container width="50%">
      <Link>Raparperitaivas</Link>
    </Container>
  </Container>
);

export default Songs;
