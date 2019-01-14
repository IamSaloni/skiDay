// Print Student Table
// Table
// Roll No, Student Name, Standard
// 1, Karun Kamal, 10th
// 2, Saloni, 7th
// 3, Arun, Btech
import React from "react";
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
              {this.props.students.map((student, i)=>{
                    return <tr key={i}>
                          <td >{student.name}</td>
                          <td >{student.id}</td>
                          <td >{student.Standard}</td>

                    </tr>
              })}
        </tbody>
        </table>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <StudentList
        students={[
          {
            name: "Hall Parker",
            id: 1,
            Standard: "10th"
          },
          {
            name: "Terrie Underwood",
            id: 2,
            Standard: "10th"
          },
          {
            name: "Briana Britt",
            id: 3,
            Standard: "11th"
          },
          {
            name: "Lara Cardenas",
            id: 4,
            Standard: "11th"
          },
          {
            name: "Wilder Ware",
            id: 5,
            Standard: "11th"
          }
        ]}
      />
    );
  }
}

// import React from 'react'

// const App = () => (<h1 id={'title'}>
//       Hello world
//    </h1>)

export default App;
