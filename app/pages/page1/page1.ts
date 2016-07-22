import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder } from '@angular/common';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  inputs:Array<{id:number,value:string}>;

  static get parameter(){
    return [ [FormBuilder] ];
  }

  constructor(private navController: NavController,fb : FormBuilder) {

    this.inputs = [{id:Math.random(),value:''}];
  }

  addInput ():void {
    this.inputs.push({id:Math.random(),value:''});
  }

  removeInputs(id:number): Array<any>{
    this.inputs = this.inputs.filter(i =>{ return i.id !== id});
    return this.inputs;
  }

  savePackage():void{
    console.log(this.inputs);
  }
}
