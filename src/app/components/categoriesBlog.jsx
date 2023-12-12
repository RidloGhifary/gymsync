import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function CategoriesBlog({ title, amount }) {
  return (
    <div className="flex justify-between items-center mt-4 pb-4 border-b">
      <div className="flex items-center gap-1">
        <CaretRight size={20} color="#333" />
        <p className="text-secBlack">{title}</p>
      </div>
      <p className="text-secBlack">({amount})</p>
    </div>
  )
}