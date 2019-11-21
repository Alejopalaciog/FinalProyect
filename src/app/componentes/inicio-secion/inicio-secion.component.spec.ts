import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSecionComponent } from './inicio-secion.component';

describe('InicioSecionComponent', () => {
  let component: InicioSecionComponent;
  let fixture: ComponentFixture<InicioSecionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSecionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
