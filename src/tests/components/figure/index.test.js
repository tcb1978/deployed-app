import { render } from '@testing-library/react';
import Figure from '../../../components/figure';

test('renders Figure component', () => {
  render(<Figure className="test" children={[]} />);
});