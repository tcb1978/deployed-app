import { render } from '@testing-library/react';
import SelectDisplay from '../../../components/select-display';
import Context from '../../../context/Collection';

test('renders SelectDisplay component', () => {
  render(
  <Context>
    <SelectDisplay children={[]}/>
  </Context>
  );
});