import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'my-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@Input() image!:string;
@Input() tittle!: string;
@Input() info!: string;
@Input() text_btn!: string;
@Input() clickEvent!:() => void;

onclick(){
  this.clickEvent();
}
}
