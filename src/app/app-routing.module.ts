import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './profile/posts/posts.component';
import { SavedComponent } from './profile/saved/saved.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'home', component:HomeComponent},
 {path:'profile', component:ProfileComponent},
 {path:'profile/posts',component:PostsComponent},
 {path:'profile/saved',component:SavedComponent},
 {path:'**',component:ProfileComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
