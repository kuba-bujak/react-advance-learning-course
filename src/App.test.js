import { render, screen } from '@testing-library/react'
import App from './App'

test('generuje główną stronę aplikacji', () => {
  render(<App />)
  const buttonElement = screen.getByText(/resetuj/i)
  expect(buttonElement).toBeInTheDocument()
})
