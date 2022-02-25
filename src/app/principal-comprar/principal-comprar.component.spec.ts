import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComprarComponent } from './principal-comprar.component';

describe('PrincipalComprarComponent', () => {
  let component: PrincipalComprarComponent;
  let fixture: ComponentFixture<PrincipalComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
