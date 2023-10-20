import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Shell } from './shell';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Shell>{children}</Shell>
    </>
  );
};
