import { Component, OnInit } from "@angular/core";
import { Todo } from "../list-todos/list-todos.component";
import { TodoDataService } from "../services/data/todo-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getTodo();
  }

  getTodo() {
    this.todoService.retrieveTodo("memo", this.id).subscribe((response) => {
      this.todo = response;
      console.log("todo", this.todo);
    });
  }

  saveTodo() {}
}
