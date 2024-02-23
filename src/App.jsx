import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
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
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  );
};

export default App;
