import { render } from '@testing-library/react';
import ListItem from '../../../components/list-item';

test('renders ListItem component', () => {
  render(<ListItem children={[]} />);
});