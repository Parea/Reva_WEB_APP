import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: '/login', pathMatch: 'full'},
    ]
  },

  // Routes Agent
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'agent/dashboard', component: AgentDashboardComponent},
    ]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
