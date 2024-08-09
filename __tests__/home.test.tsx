import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page'
import { getClient } from '../app/ApolloClient';
import { MockedProvider } from '@apollo/client/testing';

jest.mock('../app/ApolloClient.ts', () => ({
  getClient: jest.fn(),
}));

const mockData = {
  characters: {
    results: [
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        origin: { name: 'Earth (C-137)' },
        location: { name: 'Citadel of Ricks' },
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        origin: { name: 'Earth (C-137)' },
        location: { name: 'Citadel of Ricks' },
      },
    ],
  },
};

describe('Home Component', () => {
  beforeEach(() => {
    // Mock the getClient function to return the mock data
    (getClient as jest.Mock).mockReturnValue({
      query: jest.fn().mockResolvedValue({ data: mockData }),
    });
  });

  it('renders the character cards correctly', async () => {
    render(await Home());

 // Wait for the elements to appear
 await waitFor(() => {
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  expect(screen.getByText('Morty Smith')).toBeInTheDocument();
});

// Check if the species "Human" appears twice
const speciesElements = screen.getAllByText('Human');
expect(speciesElements).toHaveLength(2);

// Check if the origin "Earth (C-137)" appears twice
const originElements = screen.getAllByText('Origin: Earth (C-137)');
expect(originElements).toHaveLength(2);

// Check if the location "Citadel of Ricks" appears twice
const locationElements = screen.getAllByText('Location: Citadel of Ricks');
expect(locationElements).toHaveLength(2);

// Check if the status buttons are rendered
const statusButtons = screen.getAllByRole('button', { name: /Alive/i });
expect(statusButtons).toHaveLength(2);
  });
});
