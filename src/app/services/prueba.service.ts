
  import { Injectable }                 from '@angular/core';
  import { HttpClient, HttpHeaders }    from '@angular/common/http';
  import { Observable}                  from 'rxjs/Rx';

  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';

  //////////////////////////////////////////////////////////////////////////////////////

  import { ApiUrlConfigService }        from './api-url-config.service';
  import { AuthorizationService }       from './authorization.service';  
  
  import { NotesResponse }              from '../interfaces/notes-response';
import { ProductesResponse } from '../interfaces/productes-response';
  
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  @Injectable()
  export class PruebaService {

    constructor(private http                 : HttpClient,
                private ApiUrlConfigService  : ApiUrlConfigService,
                private AuthorizationService : AuthorizationService)             
  { }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  getFilter(color: String, diametre: Number): Observable<ProductesResponse[]>
  {
    return this.http.get( this.ApiUrlConfigService._getFromFiltro,
                            this.AuthorizationService.header_token()
                          )
                          .map(respuesta => respuesta)
                          .catch((error: any) => Observable.throw(error));
  }
  
  getColors(): Observable<String[]>
  {
    return this.http.get( this.ApiUrlConfigService._getColorsURL, 
                          this.AuthorizationService.header_token()
                        )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));  
  }

  //////////////////////////////////////////////////////////////////////////////////////

  getDiametres(): Observable<Number[]>
  {
    return this.http.get( this.ApiUrlConfigService._getDiametreURL, 
                          this.AuthorizationService.header_token()
                        )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));  
  }


  //////////////////////////////////////////////////////////////////////////////////////

  getProducts(): Observable<ProductesResponse[]>
  {
    return this.http.get( this.ApiUrlConfigService._getAllProductsURL, 
                          this.AuthorizationService.header_token()
                        )
                        .map(respuesta => respuesta)
                        .catch((error: any) => Observable.throw(error)); 
  }
}
