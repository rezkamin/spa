import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headcom } from './headcom';

describe('Headcom', () => {
  let component: Headcom;
  let fixture: ComponentFixture<Headcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headcom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headcom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
