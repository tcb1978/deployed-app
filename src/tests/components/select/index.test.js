import { render } from '@testing-library/react';
import Select from '../../../components/select';

test('renders Select component', () => {
  render(<Select
    selectedAuthor="test"
    handleSelectChange={() => {}}
    sortedCollection={[]}
  />);
});