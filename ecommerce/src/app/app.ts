import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← important!
import { ArticleList } from './components/article-list/article-list';
import { ArticleNewTemplate } from './components/article-new-template/article-new-template';
import { ArticleNewReactive } from './components/article-new-reactive/article-new-reactive';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, ArticleNewTemplate, CommonModule, ArticleList, ArticleNewReactive],
  template: `
    <app-navbar (navigate)="onNavigate($event)"></app-navbar>

    <main class="container">
      <article-list *ngIf="view === 'list'"></article-list>
      <article-new-template *ngIf="view === 'template'"></article-new-template>
      <article-new-reactive *ngIf="view === 'reactive'"></article-new-reactive>
    </main>
  `
})
export class App {
  view: 'list' | 'template' | 'reactive' = 'list';

  onNavigate(page: string) {
    switch(page) {
      case 'home':
      case 'articles': this.view = 'list'; break;
      case 'template': this.view = 'template'; break;
      case 'reactive': this.view = 'reactive'; break;
    }
  }
}