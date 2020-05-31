import styled from 'styled-components';
import { GridArea } from './Grid';

const Card = styled(GridArea)`
  background-color: ${(props) => props.theme.colors.gray.primary(3)};
`;

export default Card;
