import { PropsWithChildren } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import { useAppDispatch, useAppSelector } from '@/+state/hooks';
import {
  selectNavigationHidden,
  selectNavigationOpen,
  selectToolsHidden,
  selectToolsOpen,
  setNavigationOpen,
  setToolsOpen,
} from '@/features/layout/layout-slice';

export const Shell = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const navigationHidden = useAppSelector(selectNavigationHidden);
  const navigationOpen = useAppSelector(selectNavigationOpen);

  const toolsHidden = useAppSelector(selectToolsHidden);
  const toolsOpen = useAppSelector(selectToolsOpen);

  return (
    <AppLayout
      headerSelector='#h'
      content={children}
      navigationWidth={240}
      navigationHide={navigationHidden}
      navigationOpen={navigationOpen}
      onNavigationChange={() => dispatch(setNavigationOpen(!navigationOpen))}
      toolsHide={toolsHidden}
      toolsOpen={toolsOpen}
      onToolsChange={() => dispatch(setToolsOpen(!toolsOpen))}
      ariaLabels={{
        navigation: 'Navigation drawer',
        navigationClose: 'Close navigation drawer',
        navigationToggle: 'Open navigation drawer',
        notifications: 'Notifications',
        tools: 'Help panel',
        toolsClose: 'Close help panel',
        toolsToggle: 'Open help panel',
      }}
    />
  );
};
