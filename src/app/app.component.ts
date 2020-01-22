import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj';
  loadFeature = "recipe";
  onNavigate(feature: string){
    this.loadFeature = feature;
  }
}
