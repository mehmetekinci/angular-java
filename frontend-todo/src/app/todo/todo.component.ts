import { Component, OnInit } from "@angular/core";
import { Todo } from "../list-todos/list-todos.component";
import { TodoDataService } from "../services/data/todo-data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;
  message: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id != -1) {
      this.getTodo();
    }
  }

  getTodo() {
    this.todoService.retrieveTodo("memo", this.id).subscribe((response) => {
      this.todo = response;
      console.log("todo", this.todo);
    });
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo("memo", this.todo).subscribe((response) => {
        console.log(response);
        this.message = `New todo is successfully added!`;
        setTimeout(() => {
          this.router.navigate(["todos"]);
          this.message = "";
        }, 2000);
      });
    } else {
      this.todoService
        .updateTodo("memo", this.id, this.todo)
        .subscribe((response) => {
          console.log(response);
          if (response !== undefined && response !== null) {
            this.message = `Todo ${this.id} is successfully updated!`;
            setTimeout(() => {
              this.router.navigate(["todos"]);
              this.message = "";
            }, 2000);
          }
        });
    }
  }
}
