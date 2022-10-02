import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { FactsComponent } from './components/facts/facts.component';
import { InfoComponent } from './components/info/info.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { MemesComponent } from './components/memes/memes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PasswordComponent } from './components/password/password.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full'},
  { path: 'info', component: InfoComponent},
  { path: 'jokes', component: JokesComponent },
  { path: 'memes', component: MemesComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'facts', component: FactsComponent},
  { path: 'color', component: ColorComponent},
  { path: 'user', component: UserComponent},
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
