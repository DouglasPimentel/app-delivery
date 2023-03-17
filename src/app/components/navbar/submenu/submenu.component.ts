import { Component, Input } from '@angular/core';

import { SubMenu } from '../../../types/Menu';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  @Input() openMenu: boolean | undefined;
  @Input() menuTitle: string | undefined;
  @Input() submenus: SubMenu[] | undefined;
}
