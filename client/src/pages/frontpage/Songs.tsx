import Container from '../../common/components/Container';
import { h } from 'preact';
import { Body, Link } from '../../common/components/Typography';
import { theme } from '../../common/theme';
import styled from 'styled-components';

const Songs = () => {
  return <Song />;
};

const Song = () => (
  <SongContainer paddingY={2} paddingX={4}>
    <Container width="50%">
      <Link>Leevi and the Leavings</Link>
    </Container>
    <Container width="50%">
      <Body>Raparperitaivas</Body>
    </Container>
  </SongContainer>
);

export const SongContainer = styled(Container)`
  width: 100%;
  background: ${(props) => props.theme.colors.gray.primary()};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.gray.primary(-1)};
  }
`;

export default Songs;
