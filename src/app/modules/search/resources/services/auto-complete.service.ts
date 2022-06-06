import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class AutoCompleteService {
  constructor(private http: HttpClient) {
    this.getAutoCompleteData();
  }
  getAutoCompleteData(): Observable<string[]> {
    return this.http.get<string[]>('./assets/data.json');
  }
}
