import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SharedService } from './shared.service';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const sharedService = inject(SharedService)
  console.log('intersceptor', req);
  let barrerToken:any = sessionStorage.getItem('token') == null ? sharedService.getToken(): sessionStorage.getItem('token');
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${barrerToken}`
    }
  });
  if(req.url != 'https://fakestoreapi.com/auth/login'){
    return next(authReq);
  }else{
    return next(req);
  }
  
};
