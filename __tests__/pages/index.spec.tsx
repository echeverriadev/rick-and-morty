import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyPage from '../../src/pages/index';

describe('RickAndMortyPage', () => {
  test('should renders correctly', () => {
    const { container } = render(<RickAndMortyPage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('contains CharacterList component', () => {
    render(<RickAndMortyPage />);
    const characterListElement = screen.getByText('Cargando...');
    expect(characterListElement).toBeInTheDocument();
  });
});
