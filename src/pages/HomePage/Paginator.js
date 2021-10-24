import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Pagination, PageBtn, CurrentPage, TotalPage, Dots, Button } from './HomePageStyle'



function Paginator({ page, setPage, totalPostPages }) {
  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages([])
    for(let i=1; i<=totalPostPages; i++) {
      if (i - page > 2 && i !== totalPostPages && i + 1 !== totalPostPages) {
        setPages((prev) => [...prev, <Dots key={i}>...</Dots>])
        i = totalPostPages - 1
        continue
      }

      if (page - i > 3 && i !== 1) {
        setPages((prev) => [...prev, <Dots key={i}>...</Dots>])
        i = page - 3
        continue
      }

       setPages((prev) => {
        return [
          ...prev,
          i === page ?
          <Button key={i} $active={true}>{i}</Button> :
          <Button key={i} $active={false} onClick={() => setPage(i)}>{i}</Button>
        ]
      })
    }
  }, [page, setPage, totalPostPages])

  const handlePreBtnClick = () => {
    if (page > 1) {
      setPage(page - 1)
    }
    window.scrollTo(0, 0)
  }

  const handleNextBtnClick = () => {
    if (page < totalPostPages) {
      setPage(page + 1)
    }
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Pagination>
        <PageBtn onClick={handlePreBtnClick}>＜</PageBtn>
        <CurrentPage>{[...pages]}</CurrentPage>
        <PageBtn onClick={handleNextBtnClick}>＞</PageBtn>
      </Pagination>
      <TotalPage>
        {page} / {totalPostPages}
      </TotalPage>
    </>
  )
}

Paginator.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPostPages: PropTypes.number
}

export default Paginator
