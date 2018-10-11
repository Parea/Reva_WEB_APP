import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public me: any;
  environment = environment;
  // allMenus = [
  //   null,
  //   {
  //     'name': 'agent',
  //     'links': [
  //       {'title': 'Accueil', 'icon': 'fa-home', 'url': 'dashboard'},
  //       {'title': 'Rapports', 'icon': 'fa-clipboard', 'url': 'reports'},
  //       {'title': 'Planning', 'icon': 'fa-calendar', 'url': 'plannings'}
  //     ]
  //   }
  // ];
  menus: any;
  menuPrefix: any;

  constructor() { }

  ngOnInit() {
    this.me = JSON.parse(localStorage.getItem('user'));
    console.log('this.me', this.me);
    // this.menuPrefix = this.allMenus[this.me.user_type_id].name;
    // this.menus = this.allMenus[this.me.user_type_id].links;
    // console.log('this.menu', this.menus);
  }

}
