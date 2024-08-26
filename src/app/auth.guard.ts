import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from './shared.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const sharedService = inject(SharedService);
  const router = inject(Router);
  let admin = sessionStorage.getItem('isAdmin')
  if (admin == 'true'){
    return true;
  }else{
    router.navigate(['']);
    return false;
  }
};
