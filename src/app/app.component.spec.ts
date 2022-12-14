import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloService } from './service/hello.service';

// SPEC GROUP
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // Spy service
  let helloServiceSpy: jasmine.SpyObj<HelloService>;

  // Arrange phase (setup)
  beforeEach(async () => {
    helloServiceSpy = jasmine.createSpyObj('HelloService', ['getHelloWorld']);
    helloServiceSpy.getHelloWorld.and.returnValue('Mocked hello !');

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: HelloService, useValue: helloServiceSpy }],
    }).compileComponents();

    // Create the component fixture that allows to inspect the component
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // Data binding
    fixture.detectChanges();
  });

  // UNIT TEST
  it('#getHelloWorld should return real value from the real service', () => {
    expect(component.helloService.getHelloWorld()).toBe('Mocked hello !');
    expect(helloServiceSpy.getHelloWorld.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
