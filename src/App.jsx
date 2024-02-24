import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <p key={index}>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
);

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </p>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
