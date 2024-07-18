import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
