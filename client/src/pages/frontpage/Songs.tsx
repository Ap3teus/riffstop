import Container from '../../common/components/Container';
import { h } from 'preact';
import { Body } from '../../common/components/Typography';
import { theme } from '../../common/theme';

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
      <Body>Leevi and the Leavings</Body>
    </Container>
    <Container width="50%">
      <Body>Raparperitaivas</Body>
    </Container>
  </Container>
);

export default Songs;
