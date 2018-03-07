
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent }         from './components/home/home.component';
import { NotesComponent}         from './components/notes/notes.component';
import { LoginComponent }        from './components/login/login.component';
import { LogoutComponent }       from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { Notes2Component } from './components/notes2/notes2.component';
import { ProductesComponent } from './components/productes/productes.component';

const routes: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'filtro',     component: FiltroComponent },
  { path: 'notes',      component: NotesComponent },
  { path: 'notes2',     component: Notes2Component },
  { path: 'registre',   component: ProductesComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'logout',     component: LogoutComponent },
  { path: '**',         component: PageNotFoundComponent },
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}