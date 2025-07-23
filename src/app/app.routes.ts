import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVdl } from './cvdl/cvdl';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'cvdl', component: CVdl,},
{path: 'about', component: About,},
{path: 'projects', component: Projects,},
{path: 'home', component: Home,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }