import "./styles.css";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

PRODUCTS.push({
  category: "outils",
  price: "$5",
  stocked: true,
  name: "tournevis",
});

export default function App() {
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  const listFiltrer = PRODUCTS.filter((p) => {
    const matchNom = p.name.toLowerCase().includes(search.toLowerCase());
    const matchStock = check ? p.stocked : true;
    return matchNom && matchStock;
  });

  return (
    <div>
      <input value={search} placeholder="recherche..." onChange={(e) => setSearch(e.target.value)} />
      <input type="checkbox" id="inp" checked={check} onChange={(e) => setCheck(e.target.checked)} />
      <label htmlFor="inp">en stock uniquement</label>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        {categories.map((cat) => (
          <tbody>
            <tr key={cat}>
              <th colSpan="2">{cat}</th>
            </tr>
            {listFiltrer
              .filter((c) => c.category === cat)
              .map((p) => (
                <tr key={p.name} style={p.stocked ? undefined : { color: "red" }}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
