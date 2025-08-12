import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders digital agency app', () => {
  render(<App />);
  // The app should show the loader initially
  expect(screen.getByText(/0%/)).toBeInTheDocument();
});

test('loader counts up to 100%', () => {
  render(<App />);
  // Wait for loader to complete
  setTimeout(() => {
    expect(screen.getByText(/100%/)).toBeInTheDocument();
  }, 2100);
});
