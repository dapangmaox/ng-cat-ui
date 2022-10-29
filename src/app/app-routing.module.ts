import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { ButtonsComponent } from './showcases/buttons/buttons.component';

const routes: Routes = [
  { path: 'getting-started', component: GuideComponent },
  { path: 'button', component: ButtonsComponent },
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
