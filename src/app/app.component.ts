import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'load-app', // <load-app></load-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message = 'Save all the things!';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
