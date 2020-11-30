import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import AddToDo from './AddTodo'

const store = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

describe('<AddToDo />', () => {
  test('submitting an input dispatches addTask action', () => {
    render(<Provider store={store}><AddToDo /></Provider>)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'new task' } })
    if (fireEvent.keyDown(input) === 'enter') {
      expect(store.dispatch).toHaveBeenCalled()
    }
  })
})