# Mock Service Angular

Mock services like HTTP requests.

```
-------------------
# hello.service.ts
-------------------
@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor() {}

  getHelloWorld() {
    return 'Hello world Aissam !';
  }
}
```

```
------------------------
# app.component.spec.ts
------------------------
// Spec Group
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

    fixture.detectChanges();
  });

  it('#getHelloWorld should return real value from the real service', () => {
    expect(component.helloService.getHelloWorld()).toBe('Mocked hello !');
    expect(helloServiceSpy.getHelloWorld.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
```
