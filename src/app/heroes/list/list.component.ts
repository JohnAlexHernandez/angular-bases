import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHeroe(): void{
    const deletedHero = this.heroNames.pop();
    this.deletedHero = deletedHero;
  }
}
