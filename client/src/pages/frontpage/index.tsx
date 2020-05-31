import { h } from 'preact';
import { Grid, GridArea } from '../../common/components/Grid';
import Card from '../../common/components/Card';
import Container from '../../common/components/Container';
import { theme } from '../../common/theme';
import { Heading, Body } from '../../common/components/Typography';
import Icon from '../../common/components/Icon';
import Spacing from '../../common/components/Spacing';
import CardHeader from '../../common/components/CardHeader';
import Songs from './Songs';

const FrontPage: React.FC = () => (
  <Container width="100%" height="100%">
    <Grid
      gridGap={theme.spacing(6)}
      padding={theme.spacing(6)}
      columns={['3fr', '1fr']}
      rows={['1fr', '1fr']}
      areas={['songs account', 'songs -']}
    >
      <Card header={<CardHeader title="My Songs" icon="music" />} area="songs">
        <Songs />
      </Card>
      <Card
        header={<CardHeader title="My Account" icon="account" />}
        area="account"
      >
        asd
      </Card>
    </Grid>
  </Container>
);

export default FrontPage;
