import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';

export const moveOutGuard: CanDeactivateFn<unknown> = (currentRoute, currentState) => {
  // const router = inject(Router);

  alert('checkkkkkkkkk meeeeeeeee')
  return true;
};
