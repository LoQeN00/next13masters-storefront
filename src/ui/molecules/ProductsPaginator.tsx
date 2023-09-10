import Link from 'next/link';
import React from 'react'

type Props = {
  pageNumber: string;
  
  options: {
    canGoBack: boolean;
    canGoForward: boolean;
  }
}

export const ProductsPaginator = ({pageNumber, options: {canGoBack, canGoForward}}: Props) => {
  return (
    <div className='mx-auto flex justify-center items-center mt-4'>
      <div className='space-x-4'>
      {canGoBack ? <Link href={`/products/${Number(pageNumber) - 1}`}>&#8592;</Link> : null}
      <span>{pageNumber}</span>
      {canGoForward ? <Link href={`/products/${Number(pageNumber) + 1}`}>&#8594;</Link>: null}
      </div>
      
    </div>
  )
}

