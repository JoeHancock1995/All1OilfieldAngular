import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';


export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  logo: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, position: 1, name: 'Apache', logo: '../../assets/img/apache-logo.jpg', link:'apache.com' },
  { id: 1, position: 2, name: 'Atwood Oceanics', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 3, name: 'Bardex', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 4, name: 'Borr Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 5, name: 'BP', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 6, name: 'Coflexip Stena Offshore', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 7, name: 'DC Drilling ', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 8, name: 'Diamond Offshore', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 9, name: 'Ensco Offshore International Co.', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com'},
  { id: 1, position: 10, name: 'Egyptian Offshore Drilling Company', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 11, name: 'Frontier Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 12, name: 'Fugro', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 13, name: 'Global Santa Fe', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 14, name: 'Magnum Transcontinental', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 15, name: 'Nabors', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 16, name: 'Noble Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 17, name: 'Pacific Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 18, name: 'Premium Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 19, name: 'Pride International', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 20, name: 'RBV Energy', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 21, name: 'Rowan Companies ', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 22, name: 'Saipen', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 23, name: 'Seadrill', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 24, name: 'Shelf Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 25, name: 'Songa Offshore', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 26, name: 'Space X', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 27, name: 'Stena Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 28, name: 'Subsea 7', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 29, name: 'Tesco', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 30, name: 'Transocean', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 31, name: 'Vantage Drilling', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
  { id: 1, position: 32, name: 'Ventura Petroleo', logo: '../../assets/img/apache-logo.jpg', link: 'apache.com' },
];

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ClientPageComponent{
  state = 'collapsed';
  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
