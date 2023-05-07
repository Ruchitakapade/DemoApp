/*import { StorageService } from './services/storage.service';
import { TagInputModule } from 'ngx-chips';
mport { NgxMaskModule } from 'ngx-mask';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelComponent,
    NavComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
*/

/*@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    /*BrowserModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgxMaskModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [ModalService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/