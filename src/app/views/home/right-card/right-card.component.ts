import { CommonModule } from '@angular/common';
import { Component, OnInit,  } from '@angular/core';
import { FirstOptionComponent } from "./first-option/first-option.component";
import { SecondOptionComponent } from "./second-option/second-option.component";

@Component({
  selector: 'app-right-card',
  imports: [CommonModule, FirstOptionComponent, SecondOptionComponent],
  templateUrl: './right-card.component.html',
  styleUrl: './right-card.component.scss',
})
export class RightCardComponent implements OnInit {   

  constructor() {}

  ngOnInit(): void {}  
}
