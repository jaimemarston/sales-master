import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../data';
import { AuthService } from '../../providers/auth.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

    products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();
    qty: any;
    constructor() {
        this.qty = 1;
    }

    ngOnInit() {
    }
    // increment product qty
    incrementQty() {
        console.log(this.qty + 1);
        this.qty += 1;
    }

    // decrement product qty
    decrementQty() {
        if (this.qty - 1 < 1) {
            this.qty = 1;
            console.log('1 ->' + this.qty);
        } else {
            this.qty -= 1;
            console.log('2 ->' + this.qty);
        }
    }
}
