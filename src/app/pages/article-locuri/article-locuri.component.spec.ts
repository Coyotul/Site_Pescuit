import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLocuriComponent } from './article-locuri.component';

describe('ArticleLocuriComponent', () => {
  let component: ArticleLocuriComponent;
  let fixture: ComponentFixture<ArticleLocuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleLocuriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleLocuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
