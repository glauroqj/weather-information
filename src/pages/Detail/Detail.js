import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
/** style */
import * as El from './Detail.style'

const Detail = ({ history }) => {
  const { city, temp, min, max } = useParams()
  console.log( useParams(), history )

  if (!city || !temp || !min || !max) history.push('/')
  
  return (
    <El.DetailContainer className='animated fadeIn'>
      detail
    </El.DetailContainer>
  )
}

export default withRouter(Detail)