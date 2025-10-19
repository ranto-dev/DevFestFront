import { useState } from "react";

function EditProductForm({ produit, onClose, onSave }) {
  const [form, setForm] = useState({
    produit: produit.produit,
    quantite: produit.quantite,
    prix: produit.prix,
    region: produit.region,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(produit.id, form);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <h2 className="text-xl font-bold mb-2 text-black text-center">
        Modifier le produit
      </h2>
      <input
        type="text"
        name="produit"
        value={form.produit}
        onChange={handleChange}
        placeholder="Produit"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="quantite"
        value={form.quantite}
        onChange={handleChange}
        placeholder="Quantité"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="prix"
        value={form.prix}
        onChange={handleChange}
        placeholder="Prix"
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="region"
        value={form.region}
        onChange={handleChange}
        placeholder="Région"
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Enregistrer
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
