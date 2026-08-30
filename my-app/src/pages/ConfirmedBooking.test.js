import { render } from '@testing-library/react';
import ConfirmedBooking from '../pages/ConfirmedBooking';

describe('LocalStorage Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  test('writes booking data to localStorage correctly', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const mockData = [{ date: '2026-08-30', time: '17:00', guests: '2', occasion: 'Birthday' }];

    localStorage.setItem('bookingData', JSON.stringify(mockData));

    expect(setItemSpy).toHaveBeenCalledWith('bookingData', JSON.stringify(mockData));
  });

  test('reads booking data from localStorage on component mount', () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    const mockData = [{ date: '2026-08-30', time: '17:00', guests: '2', occasion: 'Birthday' }];
    
    localStorage.setItem('bookingData', JSON.stringify(mockData));

    render(<ConfirmedBooking />);

    expect(getItemSpy).toHaveBeenCalledWith('bookingData');
  });
});