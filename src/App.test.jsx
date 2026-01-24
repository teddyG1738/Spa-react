import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Portfolio Platform', () => {
  test('renders main title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Showcase Your Creative Projects/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders project cards', async () => {
    render(<App />);
    const projectCards = await screen.findAllByTestId(/project-card/i);
    expect(projectCards.length).toBeGreaterThan(0);
  });

  test('search functionality works', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search projects/i);
    
    fireEvent.change(searchInput, { target: { value: 'E-commerce' } });
    
    await waitFor(() => {
      const filteredProjects = screen.getByText(/E-commerce Platform/i);
      expect(filteredProjects).toBeInTheDocument();
    });
  });

  test('add project button opens form', () => {
    render(<App />);
    const addButton = screen.getByText(/Add Your Project/i);
    
    fireEvent.click(addButton);
    
    const formTitle = screen.getByText(/Add New Project/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('dark mode toggle works', () => {
    render(<App />);
    const toggleButton = screen.getByLabelText(/Switch to dark mode/i);
    
    fireEvent.click(toggleButton);
    
    expect(document.documentElement.classList.contains('dark-mode')).toBe(true);
  });
});
