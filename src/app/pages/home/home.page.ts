import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  auth = AuthService.getUserAuthenticated();
  date = new Date();


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToProducts(): void {
      this.router.navigate(['products']);
  }

}
