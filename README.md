# Todomanager

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [React Hooks In Action](#React-Hooks-in-Action)
- [FormData and Promises](#ForData-and-Promises)
- [Code Structure](#Code-structure)
- [Continued development](#Continued-development)
- [Resouces](#Resources)
- [Credit](#Credit)

## Description

TodoManager is a React application designed to help users manage their tasks effectively. It leverages modern React hooks like useState, useEffect, and useRef to provide a smooth and interactive user experience. This README provides an overview of its features, installation instructions, and usage guidelines.

## Features

- **Add and Remove Todos**: Easily add new tasks and remove completed ones.
- **Persistent Storage**: Todos are stored in localStorage to maintain state between sessions.
- **Responsive Design**: Adaptable layout for different screen sizes.


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Javascript(ES6+)**: Modern JavaScript syntax for enhanced readability and functionality.
- **HTML5 & CSS**: Basic markup and styling for the application.

## Installation

To run TodoManager locally, follow these steps:



1. Clone the repository:
   ```
    git clone https://github.com/chubicode/Todomanager.git
    cd Todomanager


2. Install dependencies:
   ```
         npm install

## Usage

Once installed, you can start the application by running:
``
  npm start

Open your browser and navigate to http://localhost:3000 to view TodoManager.

## React Hooks In Action 

### UseState 
useState is used extensively in this application to manage the state of the todo items. It allows us to store and update the list of todos, as well as manage individual task properties like the task description and completion status.

![useREF useState UseEffect](https://github.com/user-attachments/assets/9fae55b5-75e6-4743-b2e8-707eef35fe1a)

### UseEffect
useEffect handles side effects like saving the todo list to localStorage and fetching it on initial render. It ensures that the list is persistent even if the user refreshes the page.

![UseEffect](https://github.com/user-attachments/assets/11499c36-2d2d-4716-b81e-968a88e73d71)

### useRef
useRef is used to create references to DOM elements without causing rerenders. In this app, it could be used to focus on the input field automatically when the user is adding a new todo.


![useRef](https://github.com/user-attachments/assets/abadbc1b-57c4-4a1e-b098-dbccd7a4132e)

## Code Structure

The application's code is structured as follows:

- **src/**: Contains all source code files.
- **CSS/**:  Stylesheets for custom styling.
- **TodoItems.js**: Component to display individual todo items.
- **Todo.js**: Main TodoManager component integrating todos and user interaction.
- **Index.js**: Entry point of the application.
- **App.css**: Global styles for the application.


## Continued development 
- React

## Useful resources 

Youtube- (https://www.youtube.com/watch?v=gbAdFfSdtQ4)

## Credit

Github- https://github.com/chubicode/
