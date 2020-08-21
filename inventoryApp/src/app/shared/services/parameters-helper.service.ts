import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametersHelperService {

  private _key: string;
  private _value: any;

  constructor() { }
  
  setParams( value: any) {
    this._value = value;    
  }

  getAndClearParams() : any {
    let returnValue = this._value;
    this._value = null;
    return returnValue;        
  }
}
