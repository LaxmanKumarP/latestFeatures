import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabelsComponent } from './custom-tabels.component';

describe('CustomTabelsComponent', () => {
  let component: CustomTabelsComponent;
  let fixture: ComponentFixture<CustomTabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomTabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
