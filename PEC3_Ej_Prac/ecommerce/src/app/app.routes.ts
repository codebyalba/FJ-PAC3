import { Routes } from '@angular/router';
import { ArticleList } from './components/article-list/article-list';
import { ArticleNewTemplate } from './components/article-new-template/article-new-template';
import { ArticleNewReactive } from './components/article-new-reactive/article-new-reactive';

export const routes: Routes = [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: 'articles', component: ArticleList },
    { path: 'new-template-article', component: ArticleNewTemplate },
    { path: 'new-reactive-article', component: ArticleNewReactive },
  ];