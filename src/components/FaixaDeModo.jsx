import { Link } from "react-router-dom";
import PerfilMenu from "./PerfilMenu";

export default function FaixaDeModo({ texto, cor }) {
  return (
    <div
      style={{ background: cor }}
      className="flex justify-between items-center w-full h-20 px-8 text-2xl fixed top-0 left-0 z-50 shadow-md"
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
        {texto}
      </h2>

      <div className="flex items-center gap-4">
        <Link
          to="/lembretes"
          className="bg-white text-gray-800 h-14 px-8 rounded-lg lg:text-lg font-bold hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
        >
          Lembretes
        </Link>

        <PerfilMenu />
      </div>
    </div>
  );
}