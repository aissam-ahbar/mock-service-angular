import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor() {}

  getHelloWorld() {
    return 'Hello world Aissam !';
  }
}
