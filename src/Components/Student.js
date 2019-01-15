import React from 'react'
import PropTypes from 'prop-types'

const Student = ({name,  id, standard}) => (
    <tr>

          <td>{name}</td>
          <td>{id}</td>
          <td>{standard}</td>
    </tr>

)
Student.defaultProps = {
    name: "Student",
    id: null,
    standard: ""
}
Student.propTypes = {
    name:PropTypes.string,
    id:PropTypes.number,
    standard:PropTypes.string
}

export default Student