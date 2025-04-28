import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboutDirectiveComponent } from './all-about-directive.component';

describe('AllAboutDirectiveComponent', () => {
  let component: AllAboutDirectiveComponent;
  let fixture: ComponentFixture<AllAboutDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAboutDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAboutDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
