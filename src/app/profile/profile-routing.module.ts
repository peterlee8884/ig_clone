import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { ProfileModule } from './profile.module';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { SavedComponent } from './saved/saved.component';
const routes: Routes = [
  {path: '',component: ProfileComponent},
  {path: 'profile/posts',component: PostsComponent},
  {path: 'profile/saved',component: SavedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
