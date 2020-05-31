import Container from './Container';
import { Heading } from './Typography';
import Spacing from './Spacing';
import { theme } from '../theme';
import Icon, { IconType } from './Icon';
import { h } from 'preact';

const CardHeader = ({ title, icon }: { title: string; icon?: IconType }) => (
  <Container alignItems={'center'}>
    {icon && <Icon size={'large'} fill={theme.colors.white()} type={icon} />}
    <Spacing dir="x" />
    <Heading>{title}</Heading>
  </Container>
);

export default CardHeader;
