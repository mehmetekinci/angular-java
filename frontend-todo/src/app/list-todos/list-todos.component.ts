import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'learn dutch.'},
    {id: 2, description: 'learn Python.'},
    {id: 3, description: 'learn English.'},
    {id: 4, description: 'learn Back-end coding.'},
    {id: 5, description: 'start to fix issues from ARSpar.'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
