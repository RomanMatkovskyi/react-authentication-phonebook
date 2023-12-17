import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Breadcrumb separator=" ">
        <BreadcrumbItem>
          <Navigation />
        </BreadcrumbItem>
        <BreadcrumbItem>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </BreadcrumbItem>
      </Breadcrumb>
    </header>
  );
};
