import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('renders Rockets Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
