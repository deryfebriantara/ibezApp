import { Component, ViewChild, enableProdMode } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import * as firebase from 'firebase';
enableProdMode();

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Login } from './pages/login/login';
import { ProfilePage } from './pages/profile/profile';
import {HomePage} from './pages/home/home';
import {OrderPage} from './pages/order/order';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  local:any;
  fbApp:any;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(private platform: Platform) {
    this.initializeApp();
    this.checkLogedIn();

    const
      fbConf = {
        apiKey: "AIzaSyDmQyXN-otSqDjtk_dfRCxLUkHa4IG81Iw",
        authDomain: "ibezapp.firebaseapp.com",
        databaseURL: "https://ibezapp.firebaseio.com",
        storageBucket: "firebase-ibezapp.appspot.com"
      };
    firebase.initializeApp(fbConf);
    this.fbApp = firebase.database();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'Order', component: OrderPage, icon:'pizza' },
      { title: 'Create Package Order', component: Page1, icon: 'add-circle' },
      { title: 'Lists Package Order', component: Page2, icon:'list-box' },
      { title: 'Profile', component: ProfilePage, icon:'person' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  checkLogedIn():void{
    if((window.localStorage.getItem('login')) === null){
      this.rootPage = Login;
    }else{
      this.rootPage = ProfilePage;
    }
  }

}

ionicBootstrap(MyApp);
