/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo
{
  constructor()
  {
    this.todos = []; // array of strings
  }

  // Add a todo item
  add(todo)
  {
    this.todos.push(todo);
  }

  // Remove a todo item by index
  remove(indexOfTodo)
  {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length)
    {
      this.todos.splice(indexOfTodo, 1);
    } else
    {
      throw new Error('Invalid index');
    }
  }

  // Update a todo at a given index
  update(index, updatedTodo)
  {
    if (index >= 0 && index < this.todos.length)
    {
      this.todos[index] = updatedTodo;
    } else
    {
      throw new Error('Invalid index');
    }
  }

  // Get all todos
  getAll()
  {
    return this.todos;
  }

  // Get a specific todo by index
  get(indexOfTodo)
  {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length)
    {
      return this.todos[indexOfTodo];
    } else
    {
      throw new Error('Invalid index');
    }
  }

  // Clear all todos
  clear()
  {
    this.todos = [];
  }
}

// example immplementation
const myTodo = new Todo();

// Adding todos
myTodo.add('Learn JavaScript');
myTodo.add('Learn Node.js');
myTodo.add('Write Todo app');

// Get all todos
console.log(myTodo.getAll());

// Update a todo
myTodo.update(1, 'Master Node.js');
console.log(myTodo.getAll());

// Remove a todo
myTodo.remove(2);
console.log(myTodo.getAll());  

// Get a specific todo
console.log(myTodo.get(0));  

// Clear all todos
myTodo.clear();
console.log(myTodo.getAll());

module.exports = Todo;