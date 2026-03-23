import { useState } from 'react';

function MonTodoForm({ ajouterTache }) {
  const [valeur, setValeur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tacheNettoyee = valeur.trim();
    if (!tacheNettoyee) return;
    ajouterTache(tacheNettoyee);
    setValeur('');
  };

  return (
    <div className="todo-form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
        />
        <button type="submit" disabled={!valeur.trim()}>
          + Ajouter
        </button>
      </form>
    </div>
  );
}

export default MonTodoForm;