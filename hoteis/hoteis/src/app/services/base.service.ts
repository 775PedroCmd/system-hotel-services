import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Hotel } from '../models/hoteis';

@Injectable({
  providedIn: 'root'
})
export class ServiceBase {

  constructor(protected httpClient: HttpClient) { }

  url: string = 'hoteis';

  findById(id: any): Observable<Hotel> {
    return this.httpClient.get<Hotel>(`${API_CONFIG.baseUrl}/${this.url}/${id}`);
  }

  findAll(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${API_CONFIG.baseUrl}/${this.url}`);
  }

  create(object: Hotel): Observable<Hotel> {
    return this.httpClient.post<Hotel>(`${API_CONFIG.baseUrl}/${this.url}`, object);
  }

  update(object: Hotel, index: number): Observable<Hotel> {
    return this.httpClient.put<Hotel>(`${API_CONFIG.baseUrl}/${this.url}/${index}`, object);
  }
}
