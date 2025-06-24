import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from '../src/components/TodoList';

describe('TodoList Component', () => {
  const user = userEvent.setup();

  test('renders empty todo list initially', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  test('adds new todo when input is submitted', async () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    await user.type(input, 'Learn React Testing');
    await user.click(addButton);

    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('toggles todo completion status when checkbox is clicked', async () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    await user.type(input, 'Test toggle functionality');
    await user.click(addButton);

    const todoText = screen.getByText('Test toggle functionality');
    const checkbox = screen.getByTestId(/todo-checkbox-/);

    expect(todoText).not.toHaveClass('line-through');
    await user.click(checkbox);
    expect(todoText).toHaveClass('line-through');
  });

  test('deletes todo when delete button is clicked', async () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    await user.type(input, 'Test delete functionality');
    await user.click(addButton);

    const deleteButton = screen.getByTestId(/delete-todo-/);
    await user.click(deleteButton);

    expect(
      screen.queryByText('Test delete functionality'),
    ).not.toBeInTheDocument();
  });
});
