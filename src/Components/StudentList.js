import React from 'react'
import PropTypes from 'prop-types'
import Student from './Student'

class StudentList extends React.Component {

    render() {
          return (
                <div>
                      <table>
                            <thead>
                                  <tr>
                                        <th>Student Name</th>
                                        <th>Roll No</th>
                                        <th>Standard</th>
                                  </tr>
                            </thead>
                            <tbody>
                                  {this.props.students.map((student, i) => {
                                        return <Student key={i}
                                                          name={student.name}
                                                          id={student.id}
                                                          standard={student.standard} />
                                  })}
                            </tbody>
                      </table>
                </div>
          );
    }
}

StudentList.propTypes = {
    students:PropTypes.array
}

export default StudentList