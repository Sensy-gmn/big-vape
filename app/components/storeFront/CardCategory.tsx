interface CardCategoryProps {
  id: number;
  name: string;
}

// créer l'affichage des catégories dans la page categories
export default function CategoryCard({ id, name }: CardCategoryProps) {
  return (
    <div className="bg-slate-600 text-white p-4 rounded-md">
      <h1>{name}</h1>
      <h3>{id}</h3>
    </div>
  );
}
