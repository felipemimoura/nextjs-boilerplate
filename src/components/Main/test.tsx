import { render, screen } from '@testing-library/react'

import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    // Render component

    const { container } = render(<Main />)

    // Search element and check if element exist
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // Build snapshot

    expect(container.firstChild).toMatchSnapshot()
  })
})
