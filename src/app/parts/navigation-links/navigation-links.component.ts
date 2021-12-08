import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";

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

  menuRoutes: string[] = [];
  activeItem= 'home';
  clicked: boolean = false;
  isAdmin = false;
  basicMenu = ['pokemon','home'];
  adminMenu = ['pokemon','home','detail','createProduct','productList'];

  constructor(user: UserService, private router: Router) {
    this.isAdmin = user.isAdmin();
  }

  setActiveItem(item: any) {
    this.activeItem = item;
    this.router.navigateByUrl(item);
  }

  ngOnInit(): void {
    if (this.isAdmin)
    { this.menuRoutes = this.adminMenu }
    else { this.menuRoutes = this.basicMenu }
  }
}
