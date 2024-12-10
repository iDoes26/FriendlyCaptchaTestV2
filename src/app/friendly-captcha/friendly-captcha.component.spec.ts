import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyCaptchaComponent } from './friendly-captcha.component';

describe('FriendlyCaptchaComponent', () => {
  let component: FriendlyCaptchaComponent;
  let fixture: ComponentFixture<FriendlyCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendlyCaptchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendlyCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
