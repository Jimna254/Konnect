import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistregformComponent } from './specialistregform.component';

describe('SpecialistregformComponent', () => {
  let component: SpecialistregformComponent;
  let fixture: ComponentFixture<SpecialistregformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistregformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialistregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
