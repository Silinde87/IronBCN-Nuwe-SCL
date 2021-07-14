import React from 'react';
import { render } from '../utils/test-utils';
import Index from '../pages/index';
import Text from './../components/atoms/Text';

describe('Initial testing tests', () =>{
  test('renders welcome text', () => {
    const { getByText } = render(<Index />);
    const textElement = getByText(/Welcome to/i);

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H1');
  });

  test('renders text element', () => {
    const { getByRole } = render(<Text as="h4">Test</Text>);

    const textElement = getByRole('heading');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('H4');
  });
})
