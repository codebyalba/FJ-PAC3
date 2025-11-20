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

  articles: Article[] = [
    {
      name: 'Reloj de lujo',
      imageUrl: 'assets/img/elegant-watch.jpg',  // ✅ correcte
      price: 129.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'Auriculares Bluetooth',
      imageUrl: 'assets/img/headphones.jpg',  // ✅ correcte
      price: 79.99,
      isOnSale: false,
      quantityInCart: 0
    }
  ];
  trackByArticleName(index: number, article: Article) {
    return article.name;
  }
}
