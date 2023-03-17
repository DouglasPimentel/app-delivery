import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Menu } from '../types/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus!: Observable<Menu[]>;

  constructor(private httpClient: HttpClient) { }

  getMenu() {
    return this.menus = this.getMenuFromApi();
  }

  getMenuFromApi() {
    return this.httpClient.get<Menu[]>('/assets/menu.json');
  }
}
