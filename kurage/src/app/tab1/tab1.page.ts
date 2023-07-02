import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, HttpClientModule], 
})
export class Tab1Page {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    try {
      const url = '/api/po/catalog.json';
      this.http.get(url).subscribe((data) => {
        console.log(data); // Handle the retrieved JSON data here
      });
    } catch (error) {
      console.log('error occurred:' + error);
    }
  }
}
