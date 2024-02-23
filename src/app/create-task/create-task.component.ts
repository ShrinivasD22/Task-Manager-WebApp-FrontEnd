import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    completed: false,
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  submitForm(taskForm: any) {
    if (taskForm.valid) {
      // Assign form values to newTask object
      this.newTask.title = taskForm.value.title;
      this.newTask.description = taskForm.value.description;
      this.newTask.dueDate = taskForm.value.dueDate;

      // Save the task
      this.taskService.addTask(this.newTask);

      // Reset the form after saving
      taskForm.reset();

      // Navigate to the list
      this.router.navigate(['list']);
    }
  }
}
