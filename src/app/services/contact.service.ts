import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient, public router: Router) {}

 

  create(formData: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/v1/website/contactReq/createContactBooking',
      formData
    );
  }

  
}
