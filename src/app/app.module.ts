import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCo4r9YF0191ZH_y-0T15YPx5qpng5E1bA",
    authDomain: "fir-d24cc.firebaseapp.com",
    databaseURL: "https://fir-d24cc.firebaseio.com",
    projectId: "fir-d24cc",
    storageBucket: "fir-d24cc.appspot.com",
    messagingSenderId: "113868612478"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
