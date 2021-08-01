import { render } from '@testing-library/react';
import Main from '../../../components/main';
import Context from '../../../context/Collection';

test('renders Main component', () => {
  render(
  <Context>
    <Main />
  </Context>
  )
});