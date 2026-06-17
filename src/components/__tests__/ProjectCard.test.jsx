import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../ProjectCard';

const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  type: 'Web Application',
  shortDescription: 'This is a test description.',
  tech: [
    { name: 'React', icon: 'Code' },
    { name: 'Vite', icon: 'Box' }
  ],
  image: '/test-image.jpg'
};

describe('ProjectCard Component', () => {
  it('renders the project title and description', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });

  it('calls onClick when the card is clicked', () => {
    const handleClick = vi.fn();
    render(<ProjectCard project={mockProject} onClick={handleClick} />);
    
    const card = screen.getByRole('button', { name: /ver detalles del proyecto test project/i });
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed (A11y)', () => {
    const handleClick = vi.fn();
    render(<ProjectCard project={mockProject} onClick={handleClick} />);
    
    const card = screen.getByRole('button', { name: /ver detalles del proyecto test project/i });
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
