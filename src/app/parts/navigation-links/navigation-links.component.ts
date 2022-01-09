import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})

export class NavigationLinksComponent implements OnInit {

  translate: {[key: string] : string} = {
    pokemon : 'Pokemon',
    home : 'Home',
    detail: 'Detail',
    createProduct: 'Create Product',
    productList: 'Product List'
  }

  isAdmin: boolean = true;
  menuTitle = 'Pokemon';

  menuRoutesForAdmin = ['home','detail','createProduct','productList'];
  menuRoutesForUser = ['home','detail'];

  menuRoutes = this.menuRoutesForAdmin;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
    if( this.isAdmin ) {
      this.menuRoutes = this.menuRoutesForAdmin;
    } else {
      this.menuRoutes = this.menuRoutesForUser;
    }
  }
}
