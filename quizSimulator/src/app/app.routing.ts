import { RouterModule, Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
    { path: 'quiz', component: QuizPageComponent},
    { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
