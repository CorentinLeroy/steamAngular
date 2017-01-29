import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public _categorieService: CategorieService) {

  }
  categorie = this._categorieService.getCategorie;

  ngOnInit() {
  }

}
