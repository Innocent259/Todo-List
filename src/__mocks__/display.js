// Import the original implementation of display.js
import displayToDoList from '../display.js';

// Mock the implementation of displayToDoList
jest.mock('../display.js', () => jest.fn());

describe('displayToDoList', () => {
  test('should display todo list items', () => {
    const todoList = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: false },
    ];
    const listContainer = document.createElement('div');
    listContainer.classList.add('list');
    document.body.appendChild(listContainer);
    displayToDoList(todoList);
    const listItems = listContainer.querySelectorAll('.list-properties');
    expect(listItems.length).toBe(3);
    expect(listItems[0].querySelector('input[type="text"]').value).toBe('Task 1');
    expect(listItems[1].querySelector('input[type="text"]').value).toBe('Task 2');
    expect(listItems[2].querySelector('input[type="text"]').value).toBe('Task 3');
    document.body.removeChild(listContainer);
  });
});
