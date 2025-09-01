import { CommonModule } from '@angular/common';
import { IPlatform } from '@core/interfaces/platforms.interface';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-right-card',
  imports: [CommonModule],
  templateUrl: './right-card.component.html',
  styleUrl: './right-card.component.scss',
})
export class RightCardComponent implements OnInit {
  platforms: IPlatform[] = [
    {
      id: 1,
      name: 'Party',
      icon: '/assets/icons/',
      isSelected: true,
    },
    {
      id: 2,
      name: 'Matchs',
      icon: '/assets/icons/',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Streams',
      icon: '/assets/icons/',
      isSelected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  /** Change is selected button property  */
  isClicked(id: number): void {
    this.platforms.forEach((platform) => {
      platform.isSelected = platform.id === id;
    });
  }
}
