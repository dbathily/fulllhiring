import 'react-native';
import React from 'react';
import App from '../App';

import {it} from '@jest/globals';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {searchGithubUsers} from '../api/users.ts';

jest.mock('../api/users.ts');

describe('App', () => {
  it('should renders correctly', () => {
    render(<App />);
  });

  it('should render search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search');

    expect(searchInput).toBeTruthy();
  });

  it('should show search results', async () => {
    const mockUsers = {
      items: [
        {
          id: '1',
          login: 'octocat',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
      ],
    };

    (searchGithubUsers as jest.Mock).mockResolvedValue(mockUsers);

    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'octocat');
    await waitFor(() => {
      expect(screen.getByText('octocat')).toBeTruthy();
    });
  });

});
