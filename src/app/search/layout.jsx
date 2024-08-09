import React from 'react'
import SearchpageHeader from '../components/searchpageHeader/SearchpageHeader'

export default function layout({children}) {
  return (
    <>
    <SearchpageHeader/>
      {children}
    </>
  )
}
