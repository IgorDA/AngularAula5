import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDetailComponent } from './compras-detail.component';

describe('ComprasDetailComponent', () => {
  let component: ComprasDetailComponent;
  let fixture: ComponentFixture<ComprasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
