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

  menuTitle = 'Pokemon';

  menuRoutes = ['home','detail','createProduct','productList'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
