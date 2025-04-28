import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-about-directive',
  imports: [NgFor,NgIf],
  templateUrl: './all-about-directive.component.html',
  styleUrl: './all-about-directive.component.css'
})
export class AllAboutDirectiveComponent {
   students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      address: {
        street: "123 Apple St",
        city: "New York",
        zip: "10001"
      },
      courses: [
        { courseId: "CSE101", courseName: "Computer Science Basics" },
        { courseId: "MAT101", courseName: "Mathematics I" }
      ]
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      address: {
        street: "456 Banana Ave",
        city: "Los Angeles",
        zip: "90001"
      },
      courses: [
        { courseId: "PHY101", courseName: "Physics Fundamentals" },
        { courseId: "ENG101", courseName: "English Literature" }
      ]
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      address: {
        street: "789 Cherry Blvd",
        city: "Chicago",
        zip: "60007"
      },
      courses: [
        { courseId: "CHE101", courseName: "Chemistry Basics" },
        { courseId: "BIO101", courseName: "Biology Introduction" }
      ]
    }
  ];
  
  isLoggedIn = false
}
