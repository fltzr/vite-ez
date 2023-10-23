import {
  Box,
  Button,
  ColumnLayout,
  Container,
  ContentLayout,
  Grid,
  SpaceBetween,
} from '@cloudscape-design/components';
import { useAppDispatch, useAppSelector } from '../+state/hooks';
import {
  selectDensity,
  selectNavigationHidden,
  selectNavigationOpen,
  selectTheme,
  selectToolsHidden,
  selectToolsOpen,
  setDensity,
  setNavigationHidden,
  setNavigationOpen,
  setTheme,
  setToolsHidden,
  setToolsOpen,
} from '@/features/layout/layout-slice';
import { Density, Mode as Theme } from '@cloudscape-design/global-styles';

type KVPairProps = {
  label: string;
  value: string | boolean;
};

const KVPair = ({ label, value }: KVPairProps) => (
  <div>
    <Box variant='awsui-key-label'>{label}</Box>
    <div>{value ? 'true' : 'false'}</div>
  </div>
);

export const App = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const density = useAppSelector(selectDensity);
  const navigationHidden = useAppSelector(selectNavigationHidden);
  const navigationOpen = useAppSelector(selectNavigationOpen);
  const toolsHidden = useAppSelector(selectToolsHidden);
  const toolsOpen = useAppSelector(selectToolsOpen);

  return (
    <ContentLayout disableOverlap>
      <Grid gridDefinition={[{ colspan: 3 }, { colspan: 6 }, { colspan: 3 }]}>
        <div />
        <SpaceBetween size='xl'>
          <Container>
            <ColumnLayout columns={2} variant='text-grid'>
              <KVPair label='Active Theme' value={theme} />
              <KVPair label='Active Density' value={density} />
              <KVPair label='Navigation Hidden' value={navigationHidden} />
              <KVPair label='Navigation Open' value={navigationOpen} />
              <KVPair label='Tools Hidden' value={toolsHidden} />
              <KVPair label='Tools Open' value={toolsOpen} />
            </ColumnLayout>
          </Container>
          <Container>
            <SpaceBetween size='l' direction='horizontal'>
              <Button
                variant='primary'
                onClick={() => dispatch(setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light))}
              >
                Toggle Theme
              </Button>
              <Button
                variant='primary'
                onClick={() =>
                  dispatch(
                    setDensity(
                      density === Density.Comfortable ? Density.Compact : Density.Comfortable
                    )
                  )
                }
              >
                Toggle Density
              </Button>
              <Button
                variant='primary'
                disabled={navigationHidden}
                onClick={() => dispatch(setNavigationOpen(!navigationOpen))}
              >
                Toggle Navigation
              </Button>
              <Button
                variant='primary'
                onClick={() => dispatch(setNavigationHidden(!navigationHidden))}
              >
                Hide Navigation
              </Button>
              <Button
                variant='primary'
                disabled={toolsHidden}
                onClick={() => dispatch(setToolsOpen(!toolsOpen))}
              >
                Toggle Tools
              </Button>
              <Button variant='primary' onClick={() => dispatch(setToolsHidden(!toolsHidden))}>
                Hide Tools
              </Button>
            </SpaceBetween>
          </Container>
        </SpaceBetween>
        <div />
      </Grid>
    </ContentLayout>
  );
};
