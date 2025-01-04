import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TipsComponent } from './pages/tips/tips.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ArticleCrapComponent } from './pages/article-crap/article-crap.component';
import { ArticleLocuriComponent } from './pages/article-locuri/article-locuri.component';
import { ArticleGhidComponent } from './pages/article-ghid/article-ghid.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'locations', component: LocationsComponent },
  {path : 'article-crap', component: ArticleCrapComponent},
    {path : 'article-locuri', component: ArticleLocuriComponent},
    {path : 'article-ghid', component: ArticleGhidComponent}
];
