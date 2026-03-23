import TodoItem from './TodoItem';

function TodoList({ taches, onToggle, onDelete }) {
  if (taches.length === 0) {
    return <p className="liste-vide">Aucune tâche pour le moment 🎉</p>;
  }

  return (
    <ul className="todo-liste">
      {taches.map((item) => (
        <TodoItem
          key={item.id}
          tache={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;