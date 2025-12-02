import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewReactive } from './article-new-reactive';

describe('ArticleNewReactive', () => {
  let component: ArticleNewReactive;
  let fixture: ComponentFixture<ArticleNewReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleNewReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNewReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
