export type Menu = {
  menu_id: string;
  name: string;
  uri: string;
  submenus: SubMenu[];
}

export type SubMenu = {
  submenu_id: string;
  name: string;
  uri: string;
}
