import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private _router: Router) {}
  public buscarHeroe(nameHeroe: String) {
    console.log(nameHeroe);
    this._router.navigate(['/search-heroes', nameHeroe]);
  }
}
