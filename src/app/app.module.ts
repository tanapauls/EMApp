import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCDISwtr-t4l7ncGiW4CHbTuQ8e0tmQDTo",
    authDomain: "emapp-64778.firebaseapp.com",
    databaseURL: "https://emapp-64778.firebaseio.com",
    storageBucket: "emapp-64778.appspot.com",
    messagingSenderId: "923368934939"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
