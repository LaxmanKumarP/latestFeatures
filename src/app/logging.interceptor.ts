import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SharedService } from './shared.service';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const sharedService = inject(SharedService)
  console.log('intersceptor', req);
  let barrerToken: any = sessionStorage.getItem('token') == null ? sharedService.getToken() : sessionStorage.getItem('token');
  let authReq;
  let countriesUrl = 'https://www.universal-tutorial.com/api/countries';
  let statesUrl = 'https://www.universal-tutorial.com/api/states';
  let citiesUrl = 'https://www.universal-tutorial.com/api/cities';
  if (req.url == 'https://www.universal-tutorial.com/api/getaccesstoken') {
    authReq = req.clone({
      setHeaders: {
        "Accept": "application/json",
        // "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
        "api-token": "tUTNIK-zz1HxjOTcZxdjVFYYhKUWt2HXlfr7wNQ4_6d11Fv2GCfVAHmnGEVSxAHiB3A",
        "user-email": "laxman.apr9@gmail.com"
      }
    });
  } else if (req.url == countriesUrl || req.url.includes(statesUrl) || req.url.includes(citiesUrl)) {
    authReq = req.clone({
      setHeaders: {
        "Authorization":`Bearer ${sharedService.cascadeApiToken}`,
        "Accept": "application/json",
      }
    });
  } else {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${barrerToken}`
      }
    });
  }

  if (req.url != 'https://fakestoreapi.com/auth/login') {
    return next(authReq);
  } else {
    return next(req);
  }

};
