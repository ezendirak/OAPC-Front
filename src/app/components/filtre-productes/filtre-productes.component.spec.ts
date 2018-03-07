import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreProductesComponent } from './filtre-productes.component';

describe('FiltreProductesComponent', () => {
  let component: FiltreProductesComponent;
  let fixture: ComponentFixture<FiltreProductesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreProductesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
