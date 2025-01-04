import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCrapComponent } from './article-crap.component';

describe('ArticleCrapComponent', () => {
  let component: ArticleCrapComponent;
  let fixture: ComponentFixture<ArticleCrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleCrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
