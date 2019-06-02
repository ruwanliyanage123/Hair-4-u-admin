import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'sign-in',
    component: SignInComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'register-user',
    component: SignUpComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  { path: '', redirectTo: 'Pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'Pages' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
