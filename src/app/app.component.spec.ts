import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloService } from './service/hello.service';

describe('AppComponent', () => {
  // Component Under Test
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // Spy service
  let helloServiceSpy: jasmine.SpyObj<HelloService>;

  // Arrange phase (setup)
  beforeEach(async () => {
    helloServiceSpy = jasmine.createSpyObj('HelloService', ['getHelloWorld']);
    helloServiceSpy.getHelloWorld.and.returnValue('mocked hello');

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: HelloService, useValue: helloServiceSpy }],
    }).compileComponents();
    fixture.detectChanges();
  });

  it('#getHelloWorld should return real value from the real service', () => {
    expect(fixture.componentInstance.helloService.getHelloWorld()).toBe(
      'mocked hello'
    );
  });
});
