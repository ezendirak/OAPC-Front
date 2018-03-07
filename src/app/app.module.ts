
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

import { FormsModule }            from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';

import { CollapseModule }         from 'ngx-bootstrap';
import { BsDropdownModule }       from 'ngx-bootstrap';
import { ModalModule  }           from 'ngx-bootstrap';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';

import { HomeComponent }          from './components/home/home.component';
import { HeaderComponent }        from './components/header/header.component';
import { FooterComponent }        from './components/footer/footer.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { LoginComponent}          from './components/login/login.component';
import { LogoutComponent }        from './components/logout/logout.component';
import { NotesComponent }         from './components/notes/notes.component';
import { FiltroComponent }        from './components/filtro/filtro.component';

import { ModalNoteComponent }     from './components/modal-note/modal-note.component';

import { ApiUrlConfigService }    from './services/api-url-config.service';
import { AuthorizationService }   from './services/authorization.service';
import { UserService }            from './services/user.service';
import { NotesService }           from './services/notes.service';
import { TrazaService }           from './services/traza.service';
import { PruebaService }          from './services/prueba.service';

import { DataTablesModule }       from 'angular-datatables';
import { Notes2Component } from './components/notes2/notes2.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { FormNotesComponent } from './components/form-notes/form-notes.component';
import { ProductesComponent } from './components/productes/productes.component';
import { FiltreProductesComponent } from './components/filtre-productes/filtre-productes.component';
import { TaulaProductesComponent } from './components/taula-productes/taula-productes.component';

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
    NotesComponent,
    ModalNoteComponent,
    FiltroComponent,
    Notes2Component,
    ListNotesComponent,
    FormNotesComponent,
    ProductesComponent,
    FiltreProductesComponent,
    TaulaProductesComponent
  ],

  entryComponents: [ModalNoteComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    // ReactiveFormsModule,
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],

  providers: [
    TrazaService,
    ApiUrlConfigService, 
    AuthorizationService, 
    UserService, 
    NotesService,
    //FilterService
    PruebaService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }