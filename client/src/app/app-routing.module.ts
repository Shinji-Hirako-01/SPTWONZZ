import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
	{ path: '/', component: AppComponent },
	{ path: '/poll', component: PollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
