import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

  user:Array<any>;

  constructor(private nav: NavController) {

    this.user = (JSON.parse(window.localStorage.getItem('login')));

  }



}
