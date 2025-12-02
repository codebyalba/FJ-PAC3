import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ecommerce</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" (click)="onNavigate('home')">Inici</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" (click)="onNavigate('articles')">Articles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" (click)="onNavigate('template')">Nou article template</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" (click)="onNavigate('reactive')">Nou article reactiu</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  @Output() navigate = new EventEmitter<string>();

  onNavigate(page: string) {
    this.navigate.emit(page);
  }
}
