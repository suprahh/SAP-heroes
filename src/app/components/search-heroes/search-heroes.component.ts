import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.css']
})
export class SearchHeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  busqueda: string;
  constructor(private heroesService: HeroesService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.busqueda = params['nameHeroe'];
      this.heroes = this.heroesService.buscarHeroes(this.busqueda);
    });
  }

}
