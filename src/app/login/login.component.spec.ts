import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
// Mocking with Fake Classes
// class MockAuthService { (1)
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// Mocking by Overriding Functions
// class MockAuthService extends AuthService {
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // service = new MockAuthService();
    // component = new LoginComponent(service);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  afterEach(() => {
    // service = null;
    // component = null;
    //localStorage.removeItem('token');
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    //localStorage.setItem('token', '12345');
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
