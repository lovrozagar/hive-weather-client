import { TextField, CircularProgress } from '@mui/material'
import { Fragment } from 'react'

import PropTypes from 'prop-types'

InputAutocompleteField.propTypes = {
  loading: PropTypes.bool.isRequired,
}

function InputAutocompleteField({ loading, ...params }) {
  const textFieldStyle = {
    '&&': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: 'none',
        },
      },
    },
  }

  return (
    <TextField
      {...params}
      color='primary'
      size='small'
      placeholder='Search a city'
      sx={textFieldStyle}
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <Fragment>
            {loading ? <CircularProgress color='inherit' size={20} /> : null}
            {params.InputProps.endAdornment}
          </Fragment>
        ),
      }}
    />
  )
}

export default InputAutocompleteField
