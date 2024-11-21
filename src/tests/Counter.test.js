import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
    const counterMessage = screen.getByText('Counter')
    expect(counterMessage).toBeInTheDocument
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('0')
  expect(counterMessage).toBeInTheDocument
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)
    const incrementedCount = screen.getByText('1')
    expect(incrementedCount).toBeInTheDocument
});

test('clicking - decrements the count', () => {
    const decrementButton = screen.getByText('-')
    fireEvent.click(decrementButton)
    const decrementedCount = screen.getByText('-1')
    expect(decrementedCount).toBeInTheDocument
});
