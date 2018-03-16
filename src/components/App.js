import React from 'react';
import Header from './Header';
import Section from './Section';

const dataBase = {
  title: "Listado de Cursos",
  description: "Esta es una tabla de los cursos que llevarás.",
  paragraph: "Observa con atención:",
  data: [
    ['Curso', 'Horas', 'Horario'],
    ['CSS', '20', '16:00 - 20:00'],
    ['HTML', '20', '16:00 - 20:00'],
    ['Dreamweaver', '60', '16:00 -20:00'],
    ['React', '100', '08:00 - 13:00'] 
  ]
}

const ListOfCoursesApp = () => (
  <div className="App">
    <Header 
    title={dataBase.title}
    description={dataBase.description}
    />
    <Section 
    paragraph={dataBase.paragraph}
    infoTable={dataBase.data}
    />
  </div>
)

export default ListOfCoursesApp;
