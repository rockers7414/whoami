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
  skill;
  project;

  constructor(private translateSvc: TranslateService) {
    const lang = 'en-US';
    translateSvc.setDefaultLang(lang);
    translateSvc.use(lang);

    translateSvc.onLangChange.subscribe((event: LangChangeEvent) => {
      translateSvc.getTranslation(event.lang).subscribe(data => {
        this.education = data.resume.education;
        this.experience = data.resume.experience;
        this.skill = data.resume.skill;
        this.project = data.project;
      });
    });
  }
}
