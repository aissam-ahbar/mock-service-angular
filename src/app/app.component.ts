import { Component } from '@angular/core';
import { HelloService } from './service/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public helloService: HelloService) {}
}
