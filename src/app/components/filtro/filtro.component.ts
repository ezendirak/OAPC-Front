
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TrazaService }              from '../../services/traza.service';

import { AuthorizationService }      from '../../services/authorization.service';

import { ProductesResponse }          from '../../interfaces/productes-response';

import { PruebaService }              from './../../services/prueba.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private AuthorizationService: AuthorizationService,
              private PruebaService       : PruebaService,
              private TrazaService        : TrazaService
            ) 
    { }

    
  ngOnInit() {
    this.TrazaService.log("Filtre", "ngOnInit", "");
    //setInterval( () => this.ftitulo =  '' + Math.random(), 1000);
    
    this.getAllProducts();
     Observable.interval(100).subscribe ( x => {
      this.islogged  = this.AuthorizationService.is_logged();
    });
    
  }

  // islogged
  private islogged;

  // doble data binding formulario
  private diamSelected;
  private colorSelected;

  // interfaz de respuesta
  misproducts: ProductesResponse[];
  minote  : ProductesResponse;
  
  colors: String[] = ["Vermell", "Verd", "Groc"];
  diametres: Number[] = [2, 3, 9];

  
  filtrar()
  {
    if (this.AuthorizationService.is_logged){
      this.PruebaService.getFilter(this.colorSelected, this.diamSelected)
      .subscribe( respuesta => {this.misproducts = respuesta;
                                this.TrazaService.dato("products", "Retorn de products OK", this.misproducts);
                              },
                            error => { this.TrazaService.error("products", "Retorn products KO", error);
                          });
    }
    
  }
  netejar()
  {
    this.diamSelected = "";
    this.colorSelected = "";
  }

  omplirFiltres()
  {
    if (this.AuthorizationService.is_logged){
      this.PruebaService.getColors()
      .subscribe( respuesta => {this.colors = respuesta;
                                this.TrazaService.dato("Colors", "Retorn de colors OK", this.colors);
                              },
                            error => { this.TrazaService.error("Colors", "Retorn Colors KO", error);
                          });
          
                       
      this.PruebaService.getDiametres()
      .subscribe( respuesta => {this.diametres = respuesta;
                                this.TrazaService.dato("Diametres", "Retorn de diametres OK", this.diametres);
                              },
                            error => { this.TrazaService.error("Diametres", "Retorn diametress KO", error);
                          });                    
    }
      
  }

  getAllProducts()
  {
    this.PruebaService.getProducts()
    .subscribe( respuesta => {this.misproducts = respuesta;
                              this.TrazaService.dato("products", "Retorn de products OK", this.misproducts);
                            },
                          error => { this.TrazaService.error("products", "Retorn products KO", error);
                        });
  }
  

  OnChangeC(valor){
    this.colorSelected = valor;
    this.TrazaService.dato("Color", "Color seleccionat OK", this.colorSelected);
  }

  OnChangeD(valor){
    this.diamSelected = valor;
    this.TrazaService.dato("Diametres", "Diametre seleccionat OK", this.diamSelected);
  }

  actionFilter(formulario)
  {
    //this.postNote("hola", "que tal");

    //console.log(formulario);
    //console.log(formulario.controls['titulo'].value);
    //console.log(formulario.controls['contenido'].value);

    // this.postFilter(this.fcolor, this.fdiametro)

  }
}
