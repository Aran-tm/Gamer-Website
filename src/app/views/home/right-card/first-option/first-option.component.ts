import { IPlatform } from '@core/interfaces/platforms.interface';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-option',
  imports: [CommonModule],
  templateUrl: './first-option.component.html',
  styleUrl: './first-option.component.scss',
})
export class FirstOptionComponent implements OnInit {
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
