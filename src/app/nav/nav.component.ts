import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
pages = [
  {
    'url': 'HomePageComponent',
  'text': 'Home'
},
  {
    'url': 'AboutPageComponent',
    'text': 'About'
  }
]
}
