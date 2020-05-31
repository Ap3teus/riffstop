import Container, { ContainerProps } from './Container';
import { h } from 'preact';

export const Grid: React.FC<
  {
    columns: string[];
    rows: string[];
  } & ContainerProps
> = ({ children, rows, columns, ...props }) => (
  <Container
    {...props}
    display={'grid'}
    gridTemplateRows={rows.join(' ')}
    gridTemplateColumns={columns.join(' ')}
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
