import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './auth.service';
import { CoursesService } from './courses.service';
import { PostService } from './services/post.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, CanActivate } from '@angular/router'; // Router
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { OrderService } from './order.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    HttpServicesComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoaccessComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot([
      {
        path:'', 
        component:HomeComponent
      }, // Home
      {
        path:'admin', 
        component:AdminComponent,
        canActivate:[AuthGuard]
      }, // Admin
      {
        path:'login', 
        component:LoginComponent
      }, // Login
      {
        path:'login', 
        component:NoaccessComponent
      }, // Noaccess
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    AuthService,
    OrderService,
    AuthGuard,
    
    AuthHttp,
        provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'token',
            tokenGetter: (() => localStorage.getItem('token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
