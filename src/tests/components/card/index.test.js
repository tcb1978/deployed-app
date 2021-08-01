import { render } from '@testing-library/react';
import Card from '../../../components/card';

test('renders Card component', () => {
  render(<Card author="test" img="test" title="title" />);
});

test('renders child element/component', () => {
  const {queryAllByTestId} = render(<Card author="test" img="test" title="title" />);
  expect(queryAllByTestId('fadeIn')).toBeTruthy();
  expect(queryAllByTestId('card')).toBeTruthy();
});