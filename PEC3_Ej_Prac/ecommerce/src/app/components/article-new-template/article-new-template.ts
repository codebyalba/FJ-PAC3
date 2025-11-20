import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'article-new-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-4">
      <h2>Nou Article (Template Form)</h2>
      
      <form [formGroup]="article" (ngSubmit)="onSubmit()" novalidate>

        <!-- Nom de l'article -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom de l'article: </label>
          <input id="name" class="form-control" formControlName="name">
          <div class="text-danger mt-1" *ngIf="name.invalid && (name.dirty || name.touched || submitted)">
            <small *ngIf="name.errors?.['required']" class="error-required">El nom és obligatori.</small>
            </div>
        </div>

        <!-- Preu -->
        <div class="mb-3">
          <label for="price" class="form-label">Preu (€): </label>
          <input id="price" type="number" class="form-control" formControlName="price">
          <div class="text-danger mt-1" *ngIf="price.invalid && (price.dirty || price.touched || submitted)">
            <small *ngIf="price.errors?.['required']" class="error-required">El preu és obligatori.</small>
            <small *ngIf="price.errors?.['min']" class="error">El preu ha de ser ≥ 0.</small>
            </div>
        </div>

        <!-- URL imatge -->
        <div class="mb-3">
          <label for="imageUrl" class="form-label">URL de la imatge: </label>
          <input id="imageUrl" class="form-control" formControlName="imageUrl">
          <div class="text-danger mt-1" *ngIf="imageUrl.invalid && (imageUrl.dirty || imageUrl.touched || submitted)">
            <small *ngIf="imageUrl.errors?.['required']" class="error-required">La URL és obligatòria.</small>
            <small *ngIf="imageUrl.errors?.['pattern']" class="error">La URL no és vàlida. Exemple: https://www.direccion.com/imatge.jpg</small>
            </div>
        </div>

        <!-- Checkbox en venda -->
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="isOnSale" formControlName="isOnSale">
          <label class="form-check-label" for="isOnSale">En venda </label>
        </div>

        <!-- Botó submit -->
        <button type="submit" class="btn btn-primary" [disabled]="article.invalid">Afegir Article</button>
      </form>
    </div>
  `,
    styles: [`
      .error-required {
        color: red;
        font-weight: bold;
        display: block;
        margin-top: 0.25rem;
      }
      .error {
        color: red;
        font-weight: normal;
        display: block;
        margin-top: 0.25rem;
      }
    `]
})

export class ArticleNewTemplate {
  submitted = false;

  article = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})/),
    ]),
    isOnSale: new FormControl(true)
  });

  get name() { return this.article.get('name')!; }
  get price() { return this.article.get('price')!; }
  get imageUrl() { return this.article.get('imageUrl')!; }

  onSubmit() {
    if (this.article.valid) {
      console.log('Nou article:', this.article.value);
      this.article.reset(); // opcional, neteja el formulari després de l'enviament
    } else {
      // Marca tots els controls com a "touched" per mostrar els errors si hi ha algun camp invàlid
      this.article.markAllAsTouched();
    }
  }
}