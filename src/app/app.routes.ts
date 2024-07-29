import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { authGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:'detail', component:ItemDetailsComponent},
    {path:'', component:LoginComponent},
    {path:'product/:id', component:ProductDetailComponent},
    {path:'users', component:UsersListComponent, canActivate:[authGuard]},
    {path: 'signup', component:SignupComponent}
];
