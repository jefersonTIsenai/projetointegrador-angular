import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelComprarComponent } from './painel-comprar.component';

describe('PainelComprarComponent', () => {
  let component: PainelComprarComponent;
  let fixture: ComponentFixture<PainelComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
