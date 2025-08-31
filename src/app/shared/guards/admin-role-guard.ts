import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/userService';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles = userService.user$()?.roles;
  const hasPermission = userRoles?.includes("ADMIN");
  console.log("Admin Role Guard", userRoles, hasPermission);

  if (userService.user$() && hasPermission) {
    return true;
  };
  
  return router.navigate(['restricted-content']);
};
