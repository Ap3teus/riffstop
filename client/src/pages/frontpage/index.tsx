import { h } from 'preact';
import { Grid, GridArea } from '../../common/components/Grid';
import Card from '../../common/components/Card';

const FrontPage: React.FC = () => (
  <Grid gridGap={'200px'} columns={['1fr', '1fr']} rows={['100%']}>
    <Card column={'1'} row={'1'}>
      asd
    </Card>
    <Card column={'2'} row={'1'}>
      asd
    </Card>
  </Grid>
);

export default FrontPage;
