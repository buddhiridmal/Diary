import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DiaryComponent} from './diary/diary.component';
import {AboutComponent} from './about/about.component';
import {JanComponent} from './jan/jan.component';

const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'diary' , component : DiaryComponent},
  {path: 'about' , component : AboutComponent},
  {path: 'jan' , component : JanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
