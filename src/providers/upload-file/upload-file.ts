import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../config/config'
/*
  Generated class for the UploadFileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UploadFileProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UploadFileProvider Provider');
  }

  postFile(formData):Observable<any>{
    
  	return this.http.post(`${Global.BASE_URL}:${Global.port}/upload`,formData);
  }
}
