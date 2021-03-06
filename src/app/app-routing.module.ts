import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrowPersonaComponent } from './arrow-persona/arrow-persona.component';
import { DetailPersonaComponent } from './detail-persona/detail-persona.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'arrow-component', component: ArrowPersonaComponent },
  { path: 'detail-component', component: DetailPersonaComponent },
  { path: 'question-component', component: QuestionaireComponent },
  { path: '**', component: MainPageComponent, } // todo: add a Page-not-found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
