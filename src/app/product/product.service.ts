// src/app/services/recipes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Recipe {
  id?: number;
  title: string;
  ingredients: string | string[];
  instructions: string;
  image_url?: string;
  created_at?: string;
}

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private apiUrl = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  create(formData: FormData): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, formData);
  }

  update(id: number, formData: FormData): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
