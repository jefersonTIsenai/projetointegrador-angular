import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralComprarComponent } from './mural-comprar.component';

describe('MuralComprarComponent', () => {
  let component: MuralComprarComponent;
  let fixture: ComponentFixture<MuralComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
