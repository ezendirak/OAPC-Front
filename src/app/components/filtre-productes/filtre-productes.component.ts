import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filtre-productes',
  templateUrl: './filtre-productes.component.html',
  styleUrls: ['./filtre-productes.component.css']
})
export class FiltreProductesComponent implements OnInit {

  @Input()  titulo_form:  string;
  @Output() evento_form1: EventEmitter<any> = new EventEmitter();

  fcampoA: String;
  fcampoB: String;
  filtros: any;

  constructor() { }

  ngOnInit() {
  }

  onclick($event)
  {
    console.log("CAPTURADO CLICK EN FORMULARIO");
    console.log("EMITIMOS EVENTO eventoNotesClicked");
    
    this.filtros = { "campoA": this.fcampoA, "campoB" : this.fcampoB };
    this.evento_form1.emit(JSON.stringify(this.filtros));
  }

}