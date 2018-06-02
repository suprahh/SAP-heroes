import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(private _activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _Router: Router) {
    this._activateRoute.params.subscribe(params => {
        this.heroe = this._heroesService.getHeroe(params.id);
      });
  }

  ngOnInit() {
  }
  public verHeroes() {
    this._Router.navigate(['../heroes']);
  }

}
