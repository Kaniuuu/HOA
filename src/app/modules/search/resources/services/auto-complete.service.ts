import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AutoCompleteService {
  constructor(private http: HttpClient) {}

  getAutoCompleteData(): Observable<string[]> {
    return this.http.get<string[]>('./assets/data.json');
  }
}
