import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom, ApplicationConfig } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { TipsComponent } from './pages/tips/tips.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArticleCrapComponent } from './pages/article-crap/article-crap.component';
import { ArticleLocuriComponent } from './pages/article-locuri/article-locuri.component';
import { ArticleGhidComponent } from './pages/article-ghid/article-ghid.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path : 'locations', component: LocationsComponent},
  {path : 'tips', component: TipsComponent},
  {path : 'gallery', component: GalleryComponent},
  {path : 'article-crap', component: ArticleCrapComponent},
  {path : 'article-locuri', component: ArticleLocuriComponent},
  {path : 'article-ghid', component: ArticleGhidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  // Asigură-te că AppRoutingModule este importat
  ]
})
export class AppModule { }


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppRoutingModule),
    // Add other providers here if needed
  ],
};
