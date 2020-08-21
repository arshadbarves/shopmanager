import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'bill-profile', loadChildren: './bill-profile/bill-profile.module#BillProfilePageModule' },
  { path: 'bill-reference-profile', loadChildren: './bill-reference-profile/bill-reference-profile.module#BillReferenceProfilePageModule' },
  { path: 'stock-item', loadChildren: './stock-item/stock-item.module#StockItemPageModule' },  { path: 'bill-profile-list', loadChildren: './bill-profile-list/bill-profile-list.module#BillProfileListPageModule' },
  { path: 'stock-item-list', loadChildren: './stock-item-list/stock-item-list.module#StockItemListPageModule' },
  { path: 'view-stock-item', loadChildren: './view-stock-item/view-stock-item.module#ViewStockItemPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
