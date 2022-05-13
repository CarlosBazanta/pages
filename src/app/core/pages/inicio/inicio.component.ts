import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  selectedLanguage = 'en';

  constructor( private translateService: TranslateService ) {

        this.translateService.setDefaultLang(this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);

   }

   toogleLanguage(lang: string) {
    this.translateService.use(lang);
}
  ngOnInit(): void {
  }

}
