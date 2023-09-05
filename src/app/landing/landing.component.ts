import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showFiller = false;
  expand1: boolean = true;
  isMenuOpen: boolean = true;
nnOnInit():void{
  this.toggleMenu();
}
  toggleMenu() {
    this.expand1 = !this.expand1;
    this.isMenuOpen = !this.isMenuOpen;
  }
}
