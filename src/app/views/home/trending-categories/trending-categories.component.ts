import { CommonModule } from '@angular/common';
import { ICategory } from '@core/interfaces/categories.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-categories',
  imports: [CommonModule],
  templateUrl: './trending-categories.component.html',
  styleUrl: './trending-categories.component.scss',
})
export class TrendingCategoriesComponent implements OnInit {
  categories: ICategory[] = [
    {
      id: 1,
      name: 'Action Games',
      image: '/assets/images/categories/action.jpg'
    },
    {
      id: 2,
      name: 'Sports Games',
      image: '/assets/images/categories/sports.jpg'
    },
    {
      id: 3,
      name: 'Adventure Games',
      image: '/assets/images/categories/adventure.jpg'
    },
    {
      id: 4,
      name: 'Arcade Games',
      image: '/assets/images/categories/arcade.jpg'
    },
    {
      id: 5,
      name: 'Fantasy Games',
      image: '/assets/images/categories/fantasy.jpg'
    },
    {
      id: 6,
      name: 'Strategy Games',
      image: '/assets/images/categories/strategy.jpg'
    },
    {
      id: 7,
      name: 'Shooter Games',
      image: '/assets/images/categories/shooter.jpg'
    },
    {
      id: 'View All',
      name: 'All Categories',
      image: '/assets/images/categories/all.jpg'
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
