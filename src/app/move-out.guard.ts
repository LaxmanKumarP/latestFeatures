import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';

export const moveOutGuard: CanDeactivateFn<unknown> = (currentRoute, currentState) => {
  // const router = inject(Router);

  console.log('check the guard!!!!!');
  alert('checkkkkkkkkk meeeeeeeee')
  return true;
};
