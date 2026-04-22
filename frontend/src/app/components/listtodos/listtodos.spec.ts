import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listtodos } from './listtodos';

describe('Listtodos', () => {
  let component: Listtodos;
  let fixture: ComponentFixture<Listtodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listtodos],
    }).compileComponents();

    fixture = TestBed.createComponent(Listtodos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
