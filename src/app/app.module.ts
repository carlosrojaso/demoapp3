import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//inyectar
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    UsercomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
