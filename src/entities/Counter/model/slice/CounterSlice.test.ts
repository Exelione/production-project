import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice.test', () => {
    test('decrement value change', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('increment value change', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
