import React from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Loading.style'

const Loading = ({text, color}) => (
  <El.LoadingContainer>
    {text}
  </El.LoadingContainer>
)

Loading.defaultProps = {
  text: '',
  color: 'primary'
}

Loading.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Loading