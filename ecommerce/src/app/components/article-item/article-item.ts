import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Article, ArticleQuantityChange } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule], // ✅ això inclou ngIf, ngFor i currency pipe
  template: `
    <div class="article-card" [ngClass]="{'on-sale': article.isOnSale}">
      <img [src]="article.imageUrl" alt="{{article.name}}" class="article-image" />
      <h3>{{ article.name }}</h3>
      <p [ngClass]="{'not-for-sale': !article.isOnSale}" class="price">\${{ article.price }}</p>
      
      <div *ngIf="article.isOnSale" class="quantity-controls">
        <button (click)="decrement()" [disabled]="article.quantityInCart === 0">-</button>
        <span>{{ article.quantityInCart }}</span>
        <button (click)="increment()">+</button>
      </div>
    </div>
  `,
  styles: [`
    .article-card {
      border: 2px solid #ccc;
      border-radius: 10px;
      width: 300px;
      padding: 1rem;
      text-align: center;
      margin-bottom: 1rem;
      transition: background-color 0.3s;
    }
    .on-sale { background-color: #e0ffe0; }
    .article-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
      margin-bottom: 0.5rem;
    }
    .price.not-for-sale { color: gray; }
    .quantity-controls { display: flex; justify-content: center; gap: 0.5rem; margin-top: 1rem; }
    .quantity-controls button { width: 30px; height: 30px; }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItem {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  increment() {
    this.article.quantityInCart++;
    this.quantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
  }
  
  decrement() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.quantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
    }
  }
}