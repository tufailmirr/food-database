import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Pagination from '@/components/Pagination';
import '@testing-library/jest-dom'; 

describe('Pagination Component', () => {
  const handlePreviousPageMock = jest.fn();
  const handleNextPageMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', async () => {
    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
        isNextDisabled={false}
        isPreviousDisabled={false}
      />
    );

    const prevButton = await screen.findByTestId('prev-page-button');
    const nextButton = await screen.findByTestId('next-page-button');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('Previous button is disabled when isPreviousDisabled is true',async () => {
    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
        isNextDisabled={false}
        isPreviousDisabled={true}
      />
    );

    const prevButton = await screen.findByTestId('prev-page-button');
    expect(prevButton).toBeDisabled();
  });

  test('Next button is disabled when isNextDisabled is true',async  () => {
    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
        isNextDisabled={true}
        isPreviousDisabled={false}
      />
    );

    const nextButton = await  screen.findByTestId('next-page-button');
    expect(nextButton).toBeDisabled();
  });

  test('calls handlePreviousPage when Previous button is clicked',async () => {
    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
        isNextDisabled={false}
        isPreviousDisabled={false}
      />
    );

    const prevButton = await screen.findByTestId('prev-page-button');
    fireEvent.click(prevButton);

    expect(handlePreviousPageMock).toHaveBeenCalled();
  });

  test('calls handleNextPage when Next button is clicked',async () => {
    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
        isNextDisabled={false}
        isPreviousDisabled={false}
      />
    );

    const nextButton = await screen.findByTestId('next-page-button');
    fireEvent.click(nextButton);

    expect(handleNextPageMock).toHaveBeenCalled();
  });
});
