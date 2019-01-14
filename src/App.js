// Print Student Table
// Table
// Roll No, Student Name, Standard
// 1, Karun Kamal, 10th 
// 2, Saloni, 7th
// 3, Arun, Btech
import React from 'react'

// const Student = () => {

// }

class StudentList extends React.Component {

      render() {
            return (
                  <div>
                        <ul>
                              {this.props.students.filter((student, index) => {
                                    let re = RegExp('Shi*','g');
                                    return re.test(student.name);
                              }).map((student, i) => {
                                    return <li key={i}>{student.name}</li>
                                    
                              })}

                        </ul>
                  </div>
            )
      }
}





class App extends React.Component {
      render() {
            return (
                  <StudentList students={[
                        {
                              "name": "Hall Parker"
                        },
                        {
                              "name": "Terrie Underwood"
                        },
                        {
                              "name": "Briana Britt"
                        },
                        {
                              "name": "Lara Cardenas"
                        },
                        {
                              "name": "Wilder Ware"
                        },
                        {
                              "name": "Shirley Burton"
                        },
                        {
                              "name": "Goodwin Hodges"
                        },
                        {
                              "name": "Herrera Carson"
                        },
                        {
                              "name": "Julia Kennedy"
                        },
                        {
                              "name": "Baldwin Estrada"
                        },
                        {
                              "name": "Shirley Setia"
                        },
                        {
                              "name": "Mae Galloway"
                        },
                        {
                              "name": "Diaz Benson"
                        },
                        {
                              "name": "Reeves Hancock"
                        },
                        {
                              "name": "Mercer Donovan"
                        },
                        {
                              "name": "Sharon Wilkerson"
                        },
                        {
                              "name": "Atkinson Rosa"
                        },
                        {
                              "name": "Deloris Mcmillan"
                        },
                        {
                              "name": "Lindsay Emerson"
                        },
                        {
                              "name": "Esperanza Kirkland"
                        },
                        {
                              "name": "Shirley Galloway"
                        },
                        {
                              "name": "Johnson Baker"
                        },
                        {
                              "name": "Cain Juarez"
                        },
                        {
                              "name": "Sparks Ford"
                        },
                        {
                              "name": "Deidre Moon"
                        },
                        {
                              "name": "Calhoun Kemp"
                        },
                        {
                              "name": "Everett Brock"
                        },
                        {
                              "name": "Ana Nixon"
                        },
                        {
                              "name": "Melissa Pena"
                        },
                        {
                              "name": "Hardy Santiago"
                        },
                        {
                              "name": "Sofia Moss"
                        },
                        {
                              "name": "Phelps Hull"
                        },
                        {
                              "name": "Jerri Raymond"
                        },
                        {
                              "name": "Newman Vinson"
                        },
                        {
                              "name": "Wyatt Clarke"
                        },
                        {
                              "name": "Magdalena Whitaker"
                        }
                  ]
                  } />
            );
      }
}







// import React from 'react'

// const App = () => (<h1 id={'title'}>
//       Hello world
//    </h1>)

export default App 