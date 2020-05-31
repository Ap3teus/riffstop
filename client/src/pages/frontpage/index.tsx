import { h } from 'preact';
import { Grid, GridArea } from '../../common/components/Grid';
import Card from '../../common/components/Card';
import Container from '../../common/components/Container';
import { theme } from '../../common/theme';

const FrontPage: React.FC = () => (
  <Container width="100%" height="100%">
    <Grid
      gridGap={theme.spacing(6)}
      padding={theme.spacing(6)}
      columns={['2fr', '1fr']}
      rows={['1fr', '1fr']}
      areas={['songs account', 'songs -']}
    >
      <Card area="songs">asd</Card>
      <Card area="account">asd</Card>
    </Grid>
  </Container>
);

export default FrontPage;
