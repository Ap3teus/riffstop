import Container, { ContainerProps } from './Container';
import { h } from 'preact';

export const Grid: React.FC<
  {
    columns: string[];
    rows: string[];
  } & ContainerProps
> = ({ children, rows, columns, ...props }) => (
  <Container
    display={'grid'}
    width="100%"
    height="100%"
    gridTemplateRows={rows.join(' ')}
    gridTemplateColumns={columns.join(' ')}
    {...props}
  >
    {children}
  </Container>
);

export const GridArea: React.FC<
  ContainerProps & {
    column: string;
    row: string;
  }
> = ({ column, row, ...props }) => {
  return (
    <Container {...props} gridColumn={column} gridRow={row} display="grid" />
  );
};
