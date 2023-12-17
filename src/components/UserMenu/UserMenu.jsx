import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Breadcrumb separator=" ">
      <BreadcrumbItem>
        <p>Welcome, {user.name}</p>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
