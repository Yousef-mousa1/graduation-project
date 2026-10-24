import { Routes } from '@angular/router';

import { AppShellComponent } from './layouts/app-shell/app-shell';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout';
import { AccountComponent } from './pages/account/account';
import { ChatDashboardComponent } from './pages/chat-dashboard/chat-dashboard';
import { FileAnalysisComponent } from './pages/file-analysis/file-analysis';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password';
import { HistoryComponent } from './pages/history/history';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { SecureiqLandingComponent } from './pages/secureiq-landing/secureiq-landing';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{ path: '', component: SecureiqLandingComponent, title: 'SecureIQ' }],
  },
  { path: 'login', component: LoginComponent, title: 'Sign In | SecureIQ' },
  { path: 'register', component: RegisterComponent, title: 'Create Account | SecureIQ' },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Reset Password | SecureIQ',
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: 'chat', component: ChatDashboardComponent, title: 'Chat | SecureIQ' },
      { path: 'analysis', component: FileAnalysisComponent, title: 'File Analysis | SecureIQ' },
      { path: 'history', component: HistoryComponent, title: 'History | SecureIQ' },
      { path: 'account', component: AccountComponent, title: 'Account | SecureIQ' },
    ],
  },
  { path: '**', redirectTo: '' },
];
