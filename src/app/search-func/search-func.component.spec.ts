import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFuncComponent } from './search-func.component';

describe('SearchFuncComponent', () => {
  let component: SearchFuncComponent;
  let fixture: ComponentFixture<SearchFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
