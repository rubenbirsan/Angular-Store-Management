import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Store Management';

  constructor(public translate: TranslateService) {
      translate.addLangs(['en','de','fr']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en')
  }
}
