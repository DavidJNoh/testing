import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {ServiceService} from './service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
