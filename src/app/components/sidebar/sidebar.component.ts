import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../types/Menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menus!: Observable<Menu[]>;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menus = this.menuService.getMenu();
  }
}
