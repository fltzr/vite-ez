import {
  Button,
  ColumnLayout,
  Container,
  ContentLayout,
  Grid,
  SpaceBetween,
} from '@cloudscape-design/components';
import { useAppDispatch, useAppSelector } from './hooks';
import {
  selectNavigationHidden,
  selectNavigationOpen,
  selectToolsHidden,
  selectToolsOpen,
  setNavigationHidden,
  setNavigationOpen,
  setToolsHidden,
  setToolsOpen,
} from '@/features/layout/layout-slice';

export const App = () => {
  const dispatch = useAppDispatch();
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
              Navigation Hidden: {navigationHidden ? 'true' : 'false'}
              Navigation Open: {navigationOpen ? 'true' : 'false'}
              Tools Hidden: {toolsHidden ? 'true' : 'false'}
              Tools Open: {toolsOpen ? 'true' : 'false'}
            </ColumnLayout>
          </Container>
          <Container>
            <SpaceBetween size='l' direction='horizontal'>
              <Button
                variant='primary'
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
              <Button variant='primary' onClick={() => dispatch(setToolsOpen(!toolsOpen))}>
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
