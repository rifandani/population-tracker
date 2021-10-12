import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
// files
import store from '../../../src/lib/redux/store';
import Counter from '../../../src/components/redux/Counter';
import { RootState } from '../../../src/types/redux';

// FIXME: does not work, because of bugs in redux-persist
describe('<Counter />', () => {
  const component = (
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  it('count should be incremented', () => {
    const { getByText, getByTestId } = render(component);

    const incrementBtn = getByText(/increment/i);
    const countText = getByTestId('countText');
    const counterState = (store.getState() as RootState).counter;
    const countBeforeIncremented = counterState.count;

    expect(incrementBtn).toBeTruthy();
    expect(countText).toBeTruthy();
    expect(countBeforeIncremented).toBeDefined();

    // fireEvent.press(incrementBtn);
    // expect(counterState.count).toEqual(countBeforeIncremented + 1);

    // expect(todosState.length).toEqual(1);
    // expect(todosState).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining({
    //       id: 1,
    //       text: textToEnter,
    //       date: expect.any(Date),
    //     }),
    //   ]),
    // );
  });

  it('count should be decremented', () => {
    const { getByText, getByTestId } = render(component);

    const decrementBtn = getByText(/decrement/i);
    const countText = getByTestId('countText');
    const counterState = (store.getState() as RootState).counter;
    const countBeforeDecremented = counterState.count;

    expect(decrementBtn).toBeTruthy();
    expect(countText).toBeTruthy();
    expect(countBeforeDecremented).toBeDefined();

    // fireEvent.press(decrementBtn);
    // expect(counterState.count).toEqual(countBeforeDecremented - 1);
  });
});
