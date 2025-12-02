import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewTemplate } from './article-new-template';

describe('ArticleNewTemplate', () => {
  let component: ArticleNewTemplate;
  let fixture: ComponentFixture<ArticleNewTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleNewTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNewTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
