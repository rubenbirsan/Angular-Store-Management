import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListNgrxComponent } from './product-list-ngrx.component';

describe('ProductListNgrxComponent', () => {
  let component: ProductListNgrxComponent;
  let fixture: ComponentFixture<ProductListNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
