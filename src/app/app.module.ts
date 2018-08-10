import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./user/user.service";
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
