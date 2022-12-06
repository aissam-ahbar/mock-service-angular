import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let service: HelloService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture.detectChanges();
  });

  it('#getHelloWorld should return real value from the real service', () => {
    service = new HelloService();
    expect(service.getHelloWorld()).toBe('Hello world Aissam !');
  });
});
