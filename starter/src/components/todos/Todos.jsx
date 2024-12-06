import TodoItem from "../todoitem/TodoItem";

const todos = [
  {
    title: "Buy groceries",
    description:
      " Create a shopping list and buy essentials like milk, bread, vegetables, and fruits.",
    complete: false,
  },
  {
    title: "Complete React Project",
    description:
      "Finish the to-do list app with dynamic functionality and responsive design.",
    complete: true,
  },
  {
    title: "Call mom",
    description:
      "Check in and catch up with Mom; discuss plans for the weekend.",
    complete: false,
  },
  {
    title: "Plan weekend get away",
    description:
      "Research destinations, book accommodation, and finalize travel plans.",
    complete: true,
  },
];

function Todos() {
  return (
    <div>
      <ol className="todos">
        {todos.map((todo, i) => (
          <TodoItem
            title={todo.title}
            description={todo.description}
            complete={todo.complete}
            key={i}
          />
        ))}
      </ol>
    </div>
  );
}

export default Todos;
