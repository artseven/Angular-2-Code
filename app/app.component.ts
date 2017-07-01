// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
                      // Class Variable
  template: '<h1>Hello {{ message }}</h1>'
})

export class AppComponent {
  message: string = "World"
}
