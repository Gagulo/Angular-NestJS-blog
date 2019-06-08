import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'app/api/api-config';
import { Observable } from 'rxjs';
import { PostModel } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class PostResourcesService {

  private readonly URL = ApiConfig.url + '/blog';

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<PostModel[]> {
    return this.httpClient.get(this.URL) as Observable<PostModel[]>;
  }
}
