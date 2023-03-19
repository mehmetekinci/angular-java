import { Component, OnInit } from "@angular/core";

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
  todos = [
    new Todo(1, "learn dutch.", false, new Date()),
    new Todo(2, "learn Python.", false, new Date()),
    new Todo(3, "learn English.", false, new Date()),
    new Todo(4, "learn Back-end Development", false, new Date()),
    new Todo(5, "start to fix issues from ARSpar.", false, new Date()),
  ];
  constructor() {}

  ngOnInit() {}
}
