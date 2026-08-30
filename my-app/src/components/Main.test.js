import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of available booking times', () => {
  const initialTimes = initializeTimes();
  

  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns updated available times based on the dispatched date', () => {
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-08-30' };
  
  const newState = updateTimes(initialState, action);
  

  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);
});