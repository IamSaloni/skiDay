// Print Student Table
// Table
// Roll No, Student Name, Standard
// 1, Karun Kamal, 10th
// 2, Saloni, 7th
// 3, Arun, Btech
import React from "react";
import PropTypes from "prop-types"



const Student = ({name,  id, standard}) => (
      <tr>

            <td>{name}</td>
            <td>{id}</td>
            <td>{standard}</td>
      </tr>

)



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

class App extends React.Component {

      componentDidMount() {
            
      }
      render() {
            return (
                  <StudentList
                        students={[
                              {
                                    "name": "Hall Parker",
                                    "id": 1,
                                    "standard": "10th"
                              },
                              {
                                    "name": "Terrie Underwood",
                                    "id": 2,
                                    "standard": "10th"
                              }, {
                                    "name": "Hall Parker",
                                    "id": 4,
                                    "standard": "10th"
                              }]
                        }
                  />
            );
      }
}

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

StudentList.propTypes = {
      students:PropTypes.array
}
export default App;
