/**
 * @jest-environment jsdom
 */

import { addItem } from '../todoList.js';

describe('addItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('should add a task item to the todo list', () => {
    const task = 'Do laundry';
    addItem(task);
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    expect(storedList).toHaveLength(1);
    expect(storedList[0]).toMatchObject({
      description: task,
      completed: false,
    });
  });

  test('should not add an empty task item to the todo list', () => {
    addItem('');
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    expect(storedList).toBeNull();
  });
});
