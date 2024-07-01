'use client'
import { getParamFromUrl } from "@/utils/helper";
import { useRouter, useSearchParams } from "next/navigation"
import Button from "./Button";
import { IPaginationProps } from "@/types/PaginationProps";

const Pagination = ({ handlePreviousPage, handleNextPage , isNextDisabled = false,isPreviousDisabled = false}: IPaginationProps) => {
   

    return <div className="flex justify-center items-center gap-6">
        <Button
            disabled={isPreviousDisabled as boolean}
            onClick={handlePreviousPage}
            className={`disabled:opacity-55`}
            variant="secondary"
            data-testid="prev-page-button"
        >
            Prev-Page
        </Button>

        <Button
            disabled={isNextDisabled as boolean} 
            className={`disabled:opacity-55`}
            onClick={handleNextPage}
            variant="secondary"
            
            data-testid="next-page-button"
        >
            Next-Page
        </Button>

    </div>
}

export default Pagination