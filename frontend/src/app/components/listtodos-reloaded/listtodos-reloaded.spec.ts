import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodosReloaded } from './listtodos-reloaded';

describe('ListtodosReloaded', () => {
  let component: ListtodosReloaded;
  let fixture: ComponentFixture<ListtodosReloaded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListtodosReloaded],
    }).compileComponents();

    fixture = TestBed.createComponent(ListtodosReloaded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
