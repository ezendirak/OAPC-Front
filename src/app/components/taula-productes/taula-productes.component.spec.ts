import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulaProductesComponent } from './taula-productes.component';

describe('TaulaProductesComponent', () => {
  let component: TaulaProductesComponent;
  let fixture: ComponentFixture<TaulaProductesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulaProductesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaulaProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
