import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('should render text from props', () => {
    const testText = 'lalala';
    const { getByText } = render(<Header text={testText} />);
    const element = getByText(testText);
    expect(element).toBeInTheDocument();
  });
  it('should not render text if no props supplied', () => {
    render(<Header />);
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe('');
  });
})