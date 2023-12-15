import { NavLink, Outlet } from 'react-router-dom';
import { Header, Navigation } from './Layout.styled';
import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
