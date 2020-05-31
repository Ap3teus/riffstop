import styled from 'styled-components';
import { GridArea } from './Grid';

const Card = styled(GridArea)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray.primary(2)};
`;

export default Card;
