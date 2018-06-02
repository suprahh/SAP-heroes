import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  // @Output() indexHeroe: EventEmitter<number>;
  constructor(private _router: Router) {
    // this.indexHeroe = new EventEmitter<number>();
  }

  public verHeroe() {
    // this.indexHeroe.emit(this.index);
    this._router.navigate(['/heroe', this.index]);
  }

  ngOnInit() {
  }

}
