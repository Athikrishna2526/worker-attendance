import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterServantComponent } from './register-servant.component';

describe('RegisterServantComponent', () => {
  let component: RegisterServantComponent;
  let fixture: ComponentFixture<RegisterServantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterServantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterServantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
