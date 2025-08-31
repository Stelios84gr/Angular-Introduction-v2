import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { SimpleDatatableExample } from './components/simple-datatable-example/simple-datatable-example';
import { OutputExample } from './components/output-example/output-example';
import { TemplateDrivenFormExample } from './components/template-driven-form-example/template-driven-form-example';
import { ReactiveFormExample } from './components/reactive-form-example/reactive-form-example';
import { HttpClientExample } from './components/http-client-example/http-client-example';
import { UserRegistrationExample } from './components/user-registration-example/user-registration-example';
import { UserLogin } from './components/user-login/user-login';
// guards
import { authGuard } from './shared/guards/auth-guard';
import { adminRoleGuard } from './shared/guards/admin-role-guard';
import { RestrictedContent } from './components/restricted-content/restricted-content';

export const routes: Routes = [
    {path: '', redirectTo:'/welcome', pathMatch:'full'},
    {path:'welcome', component: Welcome},
    {path: 'component-input-example', component: ComponentInputExample},
    {path: 'for-directive-example', component: ForDirectiveExample},
    {path: 'event-bind-example', component: EventBindExample},
    {path: 'simple-datatable-example', component: SimpleDatatableExample},
    {path: 'output-example', component: OutputExample},
    {path: 'template-driven-form-example', component: TemplateDrivenFormExample},
    {path: 'reactive-form-example', component: ReactiveFormExample},
    {path: 'http-client-example', component: HttpClientExample},
    {path: 'app-user-registration-example', component: UserRegistrationExample, canActivate: [authGuard, adminRoleGuard]},
    {path: 'user-login', component: UserLogin},
    {path: 'restricted-content', component: RestrictedContent}
];
