function MonTodoItem({ tache, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${tache.terminee ? 'terminee' : ''}`}>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onToggle(tache.id)}
      />
      <span className="todo-texte">{tache.texte}</span>
      <button onClick={() => onDelete(tache.id)}>🗑️</button>
    </li>
  );
}

export default MonTodoItem;