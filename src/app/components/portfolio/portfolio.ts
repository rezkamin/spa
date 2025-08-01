import { Component } from '@angular/core';
import { Headcom } from "../headcom/headcom";

@Component({
  selector: 'app-portfolio',
  imports: [Headcom],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
 srcT:string = '';
  isShown: boolean = false;

setSrc(event: MouseEvent) {
  const imgElement = (event.currentTarget as HTMLElement).querySelector('img');
  if (imgElement) {
    this.srcT = imgElement.getAttribute('src')!;
    this.isShown = true;
}
}

closePopup(): void {
    this.isShown = false;
  }

}
