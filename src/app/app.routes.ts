import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { authGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { moveOutGuard } from './move-out.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'detail', component:ItemDetailsComponent},
    {path:'signup',component:SignupComponent,canDeactivate:[moveOutGuard]},
    {path:'login', component:LoginComponent, canDeactivate:[moveOutGuard]},
    {path:'product/:id', component:ProductDetailComponent},
    {path:'users', component:UsersListComponent, canActivate:[authGuard]},
    {path: 'signup', component:SignupComponent},
    {path:'posts', component:DisplayCardsComponent, canActivate:[authGuard]},
    {path:'posts/:id', component:PostDisplayComponent , canActivate:[authGuard]},
    {path:'**', component:LoginComponent}
];
