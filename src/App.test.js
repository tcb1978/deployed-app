import { render } from '@testing-library/react';

test('renders child components', () => {
  render(<header />);
  render(<main />);
  render(<footer />);
});
