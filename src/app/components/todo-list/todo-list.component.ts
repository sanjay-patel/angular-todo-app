import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    public todos: Todo[] = [];
    constructor( private router: Router, private todoService: TodoService ) { }
    
    ngOnInit() {
        this.loadAllTodoList();    
    }
    loadAllTodoList() {
        this.todos = this.todoService.getAllTodos();
    }
    
    onClickEditTodoDetail(id) {
        console.log(id);
        this.router.navigate(['/todo-detail'], {queryParams: {id: id}});
    }
    
    onClickAddTodo() {
        this.router.navigate(['/todo-detail']);
    }
    
    onClickTodoDelete(id) {
        this.todoService.deleteTodoDetail(id);
        this.loadAllTodoList(); 
    }

}
