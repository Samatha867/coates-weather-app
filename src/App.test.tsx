import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App from './App';
import Page from '../src/components/Page/Page';

configure({ asyncUtilTimeout: 5000 });

describe('App testing', () => {
  test('renders header text', () => {
    render(<App />);
    const header = screen.getByText(/^Weather$/i);
    expect(header).toBeInTheDocument();
  });

  test('Enters location in the input field', async () => {
    render(<Page />);
    const input = screen.getAllByTestId('search');
    fireEvent.change(input[0], { target: { value: 'sydney' } });
    expect((input[0] as any).value).toBe('sydney');
  });

  test('triggers search', async () => {
    render(<Page />);
    const input = screen.getAllByTestId('search');
    fireEvent.change(input[0], { target: { value: 'sydney' } });
    fireEvent.click(screen.getByText('SEARCH'));
    await waitFor(() => {
      const loading = screen.getByText(/^loading/i);
      expect(loading).toBeInTheDocument();
    });
  });

  test('checks location is correct', async () => {
    render(<Page />);
    const input = screen.getAllByTestId('search');
    fireEvent.change(input[0], { target: { value: 'sydney' } });
    fireEvent.click(screen.getByText('SEARCH'));
    await waitFor(() => {
      const city = screen.getByText(/^sydney/i);
      expect(city).toBeInTheDocument();
    });
  });
});
