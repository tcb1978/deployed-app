import { render } from '@testing-library/react';
import View from '../../../components/view';
import Context from '../../../context/Collection';

test('renders View component', () => {
  render(
    <Context value={[]}>
      <View />
    </Context>
  );
});