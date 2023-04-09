import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../services/data/todo-data.service";
import { Router } from "@angular/router";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.scss"],
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1, "learn dutch.", false, new Date()),
  //   new Todo(2, "learn Python.", false, new Date()),
  //   new Todo(3, "learn English.", false, new Date()),
  //   new Todo(4, "learn Back-end Development", false, new Date()),
  //   new Todo(5, "start to fix issues from ARSpar.", false, new Date()),
  // ];
  todos: Todo[];
  message: string;
  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("memo").subscribe((response) => {
      this.todos = response;
    });
  }

  addTodo() {
    this.router.navigate(["todos", -1]);
  }

  updateTodo(id: number) {
    this.message = `Update of todo ${id} successful!`;
    this.router.navigate(["todos", id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo("memo", id).subscribe((response) => {
      console.log("response", response);
      this.message = `Delete of todo ${id} successful!`;
      this.refreshTodos();
    });
  }
}
