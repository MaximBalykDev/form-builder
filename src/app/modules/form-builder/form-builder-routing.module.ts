import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AuthGuard } from '../../service/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-Builder',
    pathMatch: 'full',
  },
  {
    path: 'form-Builder/form-Builder',
    component: FormBuilderComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBuilderRoutingModule {}
