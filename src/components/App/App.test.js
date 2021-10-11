import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// 由 mockResolvedValue 創一個假的 api 來測試有沒有拿到資料
test('renders learn react link', async () => {
  jest.spyOn(global. 'fetch').mockResolvedValue({
    json: jest
      .fn()
      .mockResolvedValue([{ id: 1, title:, 'i am title', createdAt: 111}]),
  })
  render(<App />);
  await waitFor(() => 
    expect(screen.getByText(/i am title/i)).toBeInTheDocument()
  )
});
