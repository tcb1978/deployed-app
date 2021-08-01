import { render } from '@testing-library/react';
import Modal from '../../../components/modal';

test('renders Modal component', () => {
  render(<Modal isOpen={false} onClose={() => {}} children={[]} />);
});