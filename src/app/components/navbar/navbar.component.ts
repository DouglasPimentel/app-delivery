import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { Menu } from '../../types/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  openSubmenu: boolean = false;
  @Input() menus!: Observable<Menu[]>;

  handleOpenSubmenu() {
    this.openSubmenu = !this.openSubmenu;
  }
}
