import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { LoginComponent } from './login/login.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { ApiService } from 'src/service/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgentDashboardComponent,
    SiteLayoutComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, { provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
