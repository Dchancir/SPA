import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    })
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }

}
