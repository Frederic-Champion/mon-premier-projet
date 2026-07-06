import "./styles.css";

import { useState } from "react";

export default function GestionMontures() {
  const [marque, setMarque] = useState("");
  const [prix, setPrix] = useState("");
  const [montures, setMontures] = useState([]);

  function ajouter() {
    setMarque("");
    setPrix("");
    setMontures([...montures, { id: crypto.randomUUID(), marque, prix }]);
  }
  function supprimer(id) {
    setMontures(montures.filter((m) => m.id !== id));
  }

  return (
    <div>
      <input onChange={(e) => setMarque(e.target.value)} value={marque} placeholder="marque" />
      <input onChange={(e) => setPrix(e.target.value)} value={prix} placeholder="prix" />
      <button type="submit" onClick={ajouter}>
        Ajouter
      </button>
      <ul>
        {montures.map((m) => (
          <li key={m.id}>
            {m.marque} -- {m.prix}€ <button onClick={() => supprimer(m.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
