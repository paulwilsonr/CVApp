import { render, screen } from '@testing-library/react';
import App from './App';

test('adds school to CV Render', () => {
  render(
  <App />
  addSchool(schoolObj));
  const linkElement = screen.getByText(/tests for school/i);
  expect(linkElement).toBeInTheDocument();
});


const schoolObj = {
    schoolName: 'tests for school',
    major: 'major',
    graduation: '3000'
};