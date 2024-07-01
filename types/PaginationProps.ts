

export type nextPage =  string | undefined | null;

  

  export interface IPaginationProps {
    handlePreviousPage : () => void;
    handleNextPage : () => void;
    isNextDisabled : Boolean;
    isPreviousDisabled : Boolean
  }