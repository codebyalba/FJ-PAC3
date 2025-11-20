import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule], // ✅ això inclou ngIf, ngFor i currency pipe
  templateUrl: './article-item.html',
  styleUrls: ['./article-item.scss']
})
export class ArticleItem {
  @Input() article!: Article;

  increment() { this.article.quantityInCart++; }
  decrement() { if (this.article.quantityInCart > 0) this.article.quantityInCart--; }
}
