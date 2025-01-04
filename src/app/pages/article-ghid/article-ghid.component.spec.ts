import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGhidComponent } from './article-ghid.component';

describe('ArticleGhidComponent', () => {
  let component: ArticleGhidComponent;
  let fixture: ComponentFixture<ArticleGhidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleGhidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleGhidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
