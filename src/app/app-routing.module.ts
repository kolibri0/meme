import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { FactsComponent } from './components/facts/facts.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { MemesComponent } from './components/memes/memes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full'},
  { path: 'jokes', component: JokesComponent },
  { path: 'memes', component: MemesComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'facts', component: FactsComponent},
  { path: 'color', component: ColorComponent},
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
