import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NameArticleValidator(forbiddenNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value && forbiddenNames.some(name => name.toLowerCase() === value)) {
      return { forbiddenName: true };
    }
    return null;
  };
}

@Component({
  selector: 'article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Nou Article (Reactiu)</h2>
    <form [formGroup]="articleForm" (ngSubmit)="onSubmit()">

      <div>
          <label for="name" class="form-label">Nom de l'article: </label>
          <input type="text" formControlName="name" />
        <div *ngIf="name.invalid && (name.touched || submitted)" style="color: red; font-weight: bold;">
          <div *ngIf="name.errors?.['required']">El nom és obligatori.</div>
          <div *ngIf="name.errors?.['forbiddenName']">Aquest nom no és permès (Prova, Test, Mock, Fake).</div>
        </div>
      </div>

      <div>
        <label>Preu (€): </label>
        <input type="number" formControlName="price" step="0.01" />
        <div *ngIf="price.invalid && (price.touched || submitted)" style="color: red; font-weight: bold;">
          <div *ngIf="price.errors?.['required']">El preu és obligatori.</div>
          <div *ngIf="price.errors?.['min']">El preu mínim és 0,1 €.</div>
        </div>
      </div>

      <div>
        <label>URL de la imatge: </label>
        <input type="text" formControlName="imageUrl" />
        <div *ngIf="imageUrl.invalid && (imageUrl.touched || submitted)" style="color: red; font-weight: bold;">
          <div *ngIf="imageUrl.errors?.['required']">La URL és obligatòria.</div>
          <div *ngIf="imageUrl.errors?.['pattern']">URL invàlida. Ha de començar per http(s):// i tenir domini vàlid.</div>
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" formControlName="isOnSale" /> En venda
        </label>
      </div>

      <button type="submit">Afegir Article</button>
    </form>
  `
})
export class ArticleNewReactive {
  
  submitted = false;

  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator(['Prova','Test','Mock','Fake'])]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [
        Validators.required,
        Validators.pattern(/^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+.*$/)
      ]],
      isOnSale: [true]
    });
  }

  get name() { return this.articleForm.get('name')!; }
  get price() { return this.articleForm.get('price')!; }
  get imageUrl() { return this.articleForm.get('imageUrl')!; }

  onSubmit() {
    this.submitted = true;
    if (this.articleForm.valid) {
      console.log('Nou article (reactiu):', this.articleForm.value);
      this.articleForm.reset({ isOnSale: true });
      this.submitted = false;
    }
  }
}