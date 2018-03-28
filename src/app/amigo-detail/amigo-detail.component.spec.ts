import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoDetailComponent } from './amigo-detail.component';

describe('AmigoDetailComponent', () => {
  let component: AmigoDetailComponent;
  let fixture: ComponentFixture<AmigoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
