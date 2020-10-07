import render from '@testing-library/react';
import App from './App';
import React from 'react';
test('renders learn react link', () => {const {getByText} = render(<App/>);
 const linkele = getByText(/learn react/i);
expect(linkele).toBeInTheDocument();
});
