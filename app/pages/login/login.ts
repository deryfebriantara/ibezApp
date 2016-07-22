import { Component } from '@angular/core';
import { NavController, Loading ,Platform} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Page1 } from '../page1/page1';

@Component({
  templateUrl: 'build/pages/login/login.html'
})

export class Login {



  constructor( private navController: NavController){
  }

  presentLoadingDefault() {
    let loading = Loading.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

    this.navController.present(loading);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  googleSignIn():void{
    this.presentLoadingDefault();
    (<any>window).plugins.googleplus.login(
      {
        'scopes': 'profile email', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '569038426779-fl2cnjehh0tot6tn9b067hidfllcd2na.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      },
      ((obj)=> {

        (window.localStorage.setItem('login',JSON.stringify(obj)));
        console.log(JSON.stringify(obj));
        this.goTo();
      }),
      function (msg) {
        console.log('error: ' + msg);
      }
    );


  }

  goTo (){
    this.navController.setRoot(Page1);
  }

}
