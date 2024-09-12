import React, { memo, useState } from 'react'

// const App = () =>
// {
//   // const [word, setWord] = useState("Sarthak"); // can use either '' or ""

//   // function updateWord()
//   // {
//   //   setWord(Math.random());
//   // }

//   return (
//     <>
//       <HeaderWithButton />
//       <Header className="header2" title="My name is " word="Sarthak"></Header>
//       <Header className="header2" title="My name is " word=" also Sarthak"></Header>
//       <Header className="header2" title="My name is " word=" not Sarthak"></Header>
//     </>
//   )
// }

function HeaderWithButton()
{
  const [word, setWord] = useState("Sarthak");
  function updateWord()
  {
    setWord(Math.random());
  }

  return <div>
    <button onClick={updateWord}>Update my name</button>
    <Header title="My name is " word={word}></Header>
  </div>
}

const Header = memo(function Header({ title, word })//use it instead of HeaderWithButton to handle selective re-render
{
  return <div>
    {title}
    {word}
  </div>
})

// function Header({ title, word }) // Writing word like props would be fine too but we prefer object destructuring
// {
//   return <div>
//     {title}
//     {word}
//   </div>
// } // this div has to be kept in the same line as return word else nothing will get returned
// if we do not do object destructuring then we would have mentioned props.title
// never write any comments inside the return section of any component as they are not recognized as comments and are rendered just like plain text

let counter = 1;

function App()
{

  const [todos, setTodos] = useState([{
    id: 1,
    title: "gym",
    description: "go to gym"
  }, {
    id: 3,
    title: "dsa",
    description: "go to study"
  }, {
    id: 1,
    title: "break",
    description: "go to park"
  }])

  function addTodo()
  {
    setTodos([...todos, { //using spread operator
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++)
    // {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({ // without using spread operator
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo title={todo.title} key={todo.id} description={todo.description} />)}
    </div>
  )
}

function Todo({ title, description })
{
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
    {/* <h5>{counter}</h5> */}
  </div>// need to fix this counter appearing same in all issue
}

export default App