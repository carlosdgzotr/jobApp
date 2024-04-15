import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonThumbnail, IonRow, IonText, IonCol, IonLabel, IonSearchbar, IonButton, IonicSlides, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline, appsOutline, options } from 'ionicons/icons';
import { JobComponent } from 'src/app/components/job/job.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonButton, IonSearchbar, IonCol, IonText, IonRow, IonIcon, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonLabel, JobComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];

  constructor() {
    addIcons({personCircleOutline, appsOutline, options });
   }

  ngOnInit() {
    this.popular = [
      {id: 1, company: 'Technyks LLC', location: 'New Delhi', expires_on:'30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary:'$40-90k/year' },
      {id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on:'07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary:'$30-80k/year' },
      {id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on:'15/12/23', post:'Lead UX Designer', type: 'Full Time', salary:'$30-70k/year' }
    ];

    this.recent = [
      {id: 4, company: 'TikTok', location: 'New Delhi', expires_on:'30/11/23', post:'Senior UX Designer', type: 'Full Time', salary:'$40-90/year' },
      {id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on:'07/12/23', post:'Full-Stack Developer', type: 'Full Time', salary:'$30-80/year' },
      {id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on:'15/12/23', post:'Lead UX Designer', type: 'Full Time', salary:'$30-70/year' }
    ]
  }


}
