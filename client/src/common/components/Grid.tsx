import Container, { ContainerProps } from './Container';
import { h } from 'preact';

export const Grid: React.FC<
  {
    columns: string[];
    rows: string[];
    areas?: string[];
  } & ContainerProps
> = ({ children, rows, columns, areas, ...props }) => (
  <Container
    display={'grid'}
    width="100%"
    gridTemplateRows={rows.join(' ')}
    gridTemplateColumns={columns.join(' ')}
    gridTemplateAreas={areas && areas.map((area) => `'${area}'`).join(' ')}
    {...props}
  >
    {children}
  </Container>
);

export type GridAreaProps = ContainerProps & {
  column?: string;
  row?: string;
  area?: string;
};

export const GridArea: React.FC<GridAreaProps> = ({
  column,
  row,
  area,
  ...props
}) => {
  return (
    <Container {...props} gridArea={area} gridColumn={column} gridRow={row} />
  );
};
