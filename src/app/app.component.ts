import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HelperService } from './Service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  selectedLanguage = 'en';

  constructor( private translateService: TranslateService, private helper: HelperService) {

        this.translateService.setDefaultLang(this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);

   }

   toogleLanguage(lang: string) {
    this.translateService.use(lang);
    this.helper.setLangueage(lang);
    this.helper.getLanguege().subscribe(lang=>{console.log(lang)})

}

}
