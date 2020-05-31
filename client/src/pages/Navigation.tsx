import Container from '../common/components/Container';
import { h } from 'preact';
import { theme } from '../common/theme';
import styled from 'styled-components';
import { Spacing } from '../common/components/Spacing';

const Navigation = () => (
  <Container
    width="100%"
    background={theme.colors.gray.primary(2)}
    height={'100px'}
    justifyContent={'space-between'}
    borderBottom={`1px solid ${theme.colors.gray.primary(-1)}`}
  >
    <Spacing size={10} />
    <NavItem title="Frontpage" />
    <Spacing size={7} />
    <NavItem title="Frontpage" />
    <Spacing size={10} />
  </Container>
);

const NavItem: React.FC<{ title: string }> = ({ title }) => (
  <NavItemContainer width="300px" height="100%">
    <Container height="20px" margin="auto">
      {title}
    </Container>
  </NavItemContainer>
);

const NavItemContainer = styled(Container)`
  :hover {
    background-color: ${(props) => props.theme.colors.gray.primary(4)};
  }
  cursor: pointer;
`;

export default Navigation;
