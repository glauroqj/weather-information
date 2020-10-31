import React from 'react'
import { withRouter } from 'react-router'
/** style */
import * as El from './Detail.style'

const Detail = ({ history }) => {

  return (
    <El.DetailContainer className='animated fadeIn'>
      detail
    </El.DetailContainer>
  )
}

export default withRouter(Detail)