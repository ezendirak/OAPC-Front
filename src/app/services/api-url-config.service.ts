import { Injectable } from '@angular/core';

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ApiUrlConfigService {

  public _loginURL           = '/api/login';
  public _whoamiURL          = '/api/whoami';
  public _refreshURL         = '/api/refresh';
  public _change_passwordURL = '/api/change-password';

  public _userallURL         = '/api/user/all';

  public _getNotesURL        = '/api/v1/notes/';
  public _getNoteURL         = '/api/v1/notes/';
  
  // public _getColorsURL       = '/api/v3/colors/';
  public _getColorsURL       = '/api/v3/colors2/';
  public _getDiametreURL     = '/api/v3/diametres/';
  public _getFromFiltro      = '/api/v3/fromFiltro/';
  public _getAllProductsURL  = '/api/v3/products/'
  
  public _postNoteURL        = '/api/v1/notes/';
  public _putNoteURL         = '/api/v1/notes/';
  public _deleteNoteURL      = '/api/v1/notes/';

  public _getNotesPageURL    = '/api/v1/notes_page/';
  public _getNotesCountURL   = '/api/v1/notes_count/';
  
  //////////////////////////////////////////////////////////////////////////////////////

  constructor() 
  { }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

}
