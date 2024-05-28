import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ContactsComponent } from './components/apps/contacts/contacts.component';
 import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FormComponent } from './components/apps/form/form.component';



const routes: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path : 'form' , component:FormComponent},
    { path: 'error-500', component: InternalErrorComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }