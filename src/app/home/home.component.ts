import { Component, DoCheck } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {

  isLogged = false;

  
  url: string;
  

  constructor(private userService: UserService,
    router: Router) {

      this.url = '';
     }

  ngDoCheck(): void {
   this.isLogged = this.userService.isLogged;
  }
}
