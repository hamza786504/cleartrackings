'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();

  let headerClass = "transparent scroll-light";
  let useHeaderInner = false;
  if (pathname !== '/') {
    headerClass = "transparent header-light";
  }

  return <Header className={headerClass} useHeaderInner={useHeaderInner} />;
}
