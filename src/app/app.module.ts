import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MemesComponent } from './components/memes/memes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PasswordComponent } from './components/password/password.component';
import { FactsComponent } from './components/facts/facts.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokesComponent,
    NotfoundComponent,
    MemesComponent,
    PasswordComponent,
    FactsComponent,
    ColorComponent,
    UserComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
