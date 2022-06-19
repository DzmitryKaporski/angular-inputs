import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataComponent } from './person-data.component';

describe('PersonDataComponent', () => {
  let component: PersonDataComponent;
  let fixture: ComponentFixture<PersonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
