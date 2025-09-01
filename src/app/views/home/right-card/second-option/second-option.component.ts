import { IUser } from '@core/interfaces/users.interface';
import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-second-option',
  imports: [CommonModule],
  templateUrl: './second-option.component.html',
  styleUrl: './second-option.component.scss',
})
export class SecondOptionComponent implements OnInit {
  users: IUser[] = [
    {
      id: 1,
      name: 'Dr. Team',
      icon: '/assets/images/user1.png',
    },
    {
      id: 2,
      name: 'Mia Plays',
      icon: '/assets/images/user3.png',
    },
    {
      id: 3,
      name: 'Keoxer',
      icon: '/assets/images/user1.png',
    },
    {
      id: 4,
      name: 'Nickmerc',
      icon: '/assets/images/user3.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
