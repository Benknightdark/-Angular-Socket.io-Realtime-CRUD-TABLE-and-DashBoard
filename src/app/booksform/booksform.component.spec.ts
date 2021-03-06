import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksformComponent } from './booksform.component';

describe('BooksformComponent', () => {
  let component: BooksformComponent;
  let fixture: ComponentFixture<BooksformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
