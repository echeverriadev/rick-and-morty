import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardCharacter } from '../../src/components/CardCharacter';
import path from 'path';

describe('CardCharacter Component', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };

  test('renders correctly', () => {
    const { container } = render(<CardCharacter character={character} />);
    expect(container.firstChild).toHaveClass('group relative flex h-100 w-100 rounded-xl shadow-xl');
  });

  test('displays character name', () => {
    render(<CardCharacter character={character} />);
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  test('displays character image', () => {
    render(<CardCharacter character={character} />);
    const image = screen.getByAltText('Rick Sanchez') as HTMLImageElement;
    expect(typeof image.src).toBe('string');
  });
});
