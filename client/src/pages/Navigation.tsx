import Container from '../common/components/Container';
import { h } from 'preact';
import { theme } from '../common/theme';

const Navigation = () => (
  <Container
    width="100%"
    background={theme.colors.gray.primary(2)}
    height={'100px'}
    borderBottom={`1px solid ${theme.colors.gray.primary(-1)}`}
  >
    <NavItem title="Frontpage" />
  </Container>
);

const NavItem: React.FC<{ title: string }> = ({ title }) => (
  <Container minWidth="200px" height="100%">
    {title}
  </Container>
);

export default Navigation;
