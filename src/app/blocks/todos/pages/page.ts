import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TodosStoreService } from '../services/todos-store.service';

@Component({
	selector: 'app-demo-page',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class TodoPageComponent implements OnInit {

	@ViewChild('todoTitleInput', { static: false }) todoTitleInput: ElementRef;

	// optimization, rerenders only todos that change instead of the entire list of todos
	todosTrackFn = (i, todo) => todo.id;

	constructor(public store: TodosStoreService) { }

	ngOnInit() {
	}



	onAddTodo(title: string) {
		this.store.addTodo(title);
		this.todoTitleInput.nativeElement.value = '';
	}
}
