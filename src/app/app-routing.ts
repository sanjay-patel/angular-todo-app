import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    },
    {
        path: 'todo-list',
        loadChildren: () => import('./components/todo-list/todo-list.module').then(mod => mod.TodoListModule)
    },
    {
        path: 'todo-detail',
        loadChildren: () => import('./components/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouting { }
