import { PropsWithChildren, useEffect } from 'react';
import { Shell, Header } from './components';
import { useAppSelector } from '@/+state/hooks';
import { selectDensity, selectTheme } from './layout-slice';
import { applyMode as applyTheme, applyDensity } from '@cloudscape-design/global-styles';

export const Layout = ({ children }: PropsWithChildren) => {
  const theme = useAppSelector(selectTheme);
  const density = useAppSelector(selectDensity);

  useEffect(() => {});

  return (
    <>
      <Header />
      <Shell>{children}</Shell>
    </>
  );
};
