import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItem } from '../article-item/article-item';
import { Article, ArticleQuantityChange } from '../../models/article.model';
@Component({
  selector: 'article-list',
  standalone: true,
  imports: [CommonModule, ArticleItem],
  template: `
    <div class="articles">
      <app-article-item
        *ngFor="let article of articles; trackBy: trackById"
        [article]="article"
        (quantityChange)="onQuantityChange($event)">
      </app-article-item>
    </div>
  `,
  styles: [`
    .articles {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  `]
})
export class ArticleList {
  articles: Article[] = [
    {
      id: 1,
      name: 'Handcream',
      imageUrl: 'assets/img/cosmetic-orange.jpg',
      price: 19.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Skincare Set',
      imageUrl: 'assets/img/cosmetic-product.jpg',
      price: 129.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 3,
      name: 'Cream',
      imageUrl: 'assets/img/cream-container.jpg',
      price: 39.99,
      isOnSale: false,
      quantityInCart: 0
    }
  ];

  trackById(index: number, article: Article) {
    return article.id;
  }

  onQuantityChange(change: ArticleQuantityChange) {
    const article = this.articles.find(a => a.id === change.article.id);
    if (article) {
      article.quantityInCart = change.quantity;
    }
  }
}