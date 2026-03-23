import { useState, useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [listeTaches, setListeTaches] = useState([]);

  const ajouterTache = useCallback((contenu) => {
    const nouvelleTache = {
      id: crypto.randomUUID(),
      texte: contenu,
      terminee: false,
      creeLe: new Date().toLocaleDateString('fr-FR')
    };
    setListeTaches((prev) => [...prev, nouvelleTache]);
  }, []);

  const onToggle = useCallback((id) => {
    setListeTaches((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  }, []);

  const onDelete = useCallback((id) => {
    setListeTaches((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const tachesRestantes = listeTaches.filter((t) => !t.terminee).length;

  return (
    <div className="app-container">
      <h1>Mes Tâches - KHADIJA AZIZ</h1>
      {listeTaches.length > 0 && (
        <p className="compteur">
          {tachesRestantes} tâche{tachesRestantes !== 1 ? 's' : ''} restante{tachesRestantes !== 1 ? 's' : ''}
        </p>
      )}
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={listeTaches}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
