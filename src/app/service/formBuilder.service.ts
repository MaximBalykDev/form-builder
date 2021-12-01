import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormBuilderService {

  private _formBuilderEventUrl = "http://localhost:3000/api/special"

  constructor(private http:HttpClient) { }

  getFormBuilder() {
    return this.http.get<any>(this._formBuilderEventUrl)
  }
}
