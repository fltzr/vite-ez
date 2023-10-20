import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';
import TopNavigation from '@cloudscape-design/components/top-navigation';

const HeaderPortal = ({ children }: PropsWithChildren) => {
  const domNode = document.querySelector('#h');

  if (!domNode) {
    return null;
  }

  return createPortal(children, domNode);
};

export const Header = () => {
  return (
    <HeaderPortal>
      <div className={styles.header}>
        <TopNavigation
          identity={{
            title: 'Ez',
            href: '/',
          }}
        />
      </div>
    </HeaderPortal>
  );
};
