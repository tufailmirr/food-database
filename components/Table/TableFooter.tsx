import { IPaginationProps, nextPage } from '@/types/PaginationProps';
import { getParamFromUrl } from '@/utils/helper';
import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react'
import Pagination from '../Pagination';

const TableFooter = ({nextPage  } : { nextPage :nextPage}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const handlePreviousPage = () => {
        router.back()
    }
    const handleNextPage = () => {
        const session = getParamFromUrl(nextPage as string, 'session')
        if (session) {
            params.set('session', session);
        }
        router.push(`search?${params.toString()}`)
    }
  return (
    <div className='footer'>
        <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} isNextDisabled={!nextPage} isPreviousDisabled={!params.get('session')}/>
    </div>
  )
}

export default TableFooter