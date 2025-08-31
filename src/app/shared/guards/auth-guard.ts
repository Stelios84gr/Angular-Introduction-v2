import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/userService';

export const authGuard: CanActivateFn = (route, state) => {
  // without const only in classes
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.user$() && !userService.isTokenExpired()) {
    return true;
  };

  return router.navigate(['user-login']);
};
