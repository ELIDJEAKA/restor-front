import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { ServiceClientComponent } from './service/service-client.component';
import { TableComponent } from './table/table.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { BasicTemplateComponent } from './basic-template/basic-template.component';
import { SignUpUserComponent } from './user/user-sign-up.component';
import { SignInUserComponent } from './user/user-sign-in.component';
import { HomeRestorComponent } from './home-restor/home-restor.component';

import { AuthguardGuard } from './authguard.guard';
import { NoAuthguardGuard } from './noauthguard.guard';

import { ServiceServer } from './server/service.server';
import { TableServer } from './server/table.server';
import { UrlServer } from './server/url.server';
import { UserServer } from './server/user.server';
import { CategoryServer } from './server/category.server';
import { ProductServer } from './server/product.server';




@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    DashboardComponent,
    ServiceComponent,
    ServiceClientComponent,
    TableComponent,
    CategoryComponent,
    ProductComponent,
    BasicTemplateComponent,
    SignUpUserComponent,
    SignInUserComponent,
    HomeRestorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home-restor',
        pathMatch: 'full'
      },
      {
        path: 'home-restor',
        component: HomeRestorComponent
      },
      {
        path: 'sign-in',
        canActivate:[NoAuthguardGuard],
        component: SignInUserComponent
      },
      {
        path: 'sign-up',
        canActivate:[NoAuthguardGuard],
        component: SignUpUserComponent
      },
      {
        path: 'restor-service-client',
        component: ServiceClientComponent
      },
      {
        path: 'admins-dashboard',
        canActivate:[AuthguardGuard],
        component: DashboardComponent
      },
      {
        path: 'admins-service',
        canActivate:[AuthguardGuard],
        component: ServiceComponent
      },
      {
        path: 'admins-table',
        canActivate:[AuthguardGuard],
        component: TableComponent
      },
      {
        path: 'admins-category',
        canActivate:[AuthguardGuard],
        component: CategoryComponent
      },
      {
        path: 'admins-product',
        canActivate:[AuthguardGuard],
        component: ProductComponent
      }
    ])
  ],
  providers: [ServiceServer,TableServer,UrlServer,CategoryServer,ProductServer,UserServer,AuthguardGuard,NoAuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
