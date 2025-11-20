import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItem } from './components/article-item/article-item';
import { Article } from './models/article.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ArticleItem, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  title = 'Ecommerce';

  articles = [
    {
      name: 'Reloj de lujo',
      imageUrl: 'assets/img/elegant-watch-with-silver-golden-chain-isolated.jpg',
      price: 129.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'Auriculares Bluetooth',
      imageUrl: 'assets/img/headphones-displayed-against-dark-background.jpg',
      price: 79.99,
      isOnSale: false,
      quantityInCart: 0
    }
  ];

  trackByArticleName(index: number, article: Article) {
    return article.name;
  }
}
