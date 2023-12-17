import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Breadcrumb separator=" ">
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/register">
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/login">
          Log In
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default AuthNav;
