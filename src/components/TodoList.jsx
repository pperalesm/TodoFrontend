import { Table } from "react-bootstrap";

function TodoList(props) {
  const todos = [
    { id: 0, description: "Hello", done: false },
    { id: 1, description: "World", done: false },
    { id: 2, description: "!!!", done: false },
  ];

  return (
    <div className="TodoList">
      <h1>TODO LIST PAGE</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.description}</td>
              {element.done && <td>Completed!</td>}
              {!element.done && <td>Pending...</td>}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TodoList;
