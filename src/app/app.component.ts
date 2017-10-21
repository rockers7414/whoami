import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  education;
  experience;

  constructor(private translate: TranslateService) {
    const lang = 'en-US';
    translate.setDefaultLang(lang);
    translate.use(lang);

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.getTranslation(event.lang).subscribe(data => {
        this.education = data.resume.education;
        this.experience = data.resume.experience;
      });
    });
  }
}
