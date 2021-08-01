import { render } from '@testing-library/react';
import UnorderedList from '../../../components/unordered-list';

test('renders UnorderedList component', () => {
  render(<UnorderedList children={[]} />);
});