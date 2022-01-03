import { Stack } from '../stack';

describe('Name of the group', () => {
  const stack = new Stack();
  const newFirstItem = '🐧'
  const newSecondItem = '😎'

  it('should create new Stack empty', () => {
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  });

  it('should push the first new item to the top', () => {
    const insertedItem = stack.push(newFirstItem)
    expect(stack.top).toBe(0)
    expect(stack.peek()).toBe(newFirstItem)
    expect(insertedItem).toBe(insertedItem)
  });

  it('should push the second new item to the top', () => {
    const insertedItem = stack.push(newSecondItem)
    expect(stack.top).toBe(1)
    expect(stack.peek()).toBe(newSecondItem)
    expect(insertedItem).toBe(insertedItem)
  });

  it('top should be firstItem if pop with two items in the stack', () => {
    const removedItem = stack.pop()
    expect(stack.top).toBe(0)
    expect(stack.peek()).toBe(newFirstItem)
    expect(removedItem).toBe(newSecondItem)
  });

  it('should be empty if remove all items', () => {
    const removedItem = stack.pop()
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
    expect(removedItem).toBe(newFirstItem)
  });
});