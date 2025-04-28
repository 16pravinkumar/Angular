import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  imports: [FormsModule,NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasksList: { id: number; title: string }[] = [];
  todo = '';
  updatedData = '';
  edit = false;
  editingId: number | null = null; // To track which task is being edited

  handleSubmit() {
    console.log(this.todo);
    
    if (this.edit) {
      // Update the task
      const taskToUpdate = this.tasksList.find((task) => task.id === this.editingId);
     
      if (taskToUpdate) {
        taskToUpdate.title = this.todo; // Update the title with the new value
      }
      this.edit = false; // Reset the edit mode
      this.updatedData = ''; // Reset the updatedData
    } else {
      // Add new task
      this.tasksList.push({
        id: this.tasksList.length + 1,
        title: this.todo,
      });
      this.todo = ''; // Clear the input after submission
    }
  }

  handleDelete(id: number) {
    this.tasksList = this.tasksList.filter((item) => item.id !== id);
  }

  handleUpdate(id: number) {
    this.editingId = id; // Set the task ID to edit
    const taskToEdit = this.tasksList.find((task) => task.id === id);
    if (taskToEdit) {
      this.updatedData = taskToEdit.title; // Populate the input field with the current task title
    }
    this.edit = true; // Set the edit mode to true
  }
}
