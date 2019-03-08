import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../../data';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
