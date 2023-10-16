import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input()
  nameGame: string = '';
  @Input()
  platforme: string = '';
  @Input()
  consoleSuportados: string = '';
  @Input()
  preco: number = 0;
  @Input()
  imgBackground: string = '';
}
