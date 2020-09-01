import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {GoogleResponse} from './Response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_KEY = environment.API_KEY;
  private CONTEXT_KEY = environment.CONTEXT_KEY;
  private url = 'https://www.googleapis.com/customsearch/v1';

  constructor(private httpClient: HttpClient) {
  }

  getSearchData(searchTerm: string): Observable<GoogleResponse> {
    return this.httpClient.get<GoogleResponse>(`${this.url}`, {
      params: {
        key: this.API_KEY,
        cx: this.CONTEXT_KEY,
        q: searchTerm
      }
    });
  }

  printHello() {
    return 'HELLO';
  }
}
