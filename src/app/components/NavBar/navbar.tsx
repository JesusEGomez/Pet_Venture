import { NextPage } from 'next';
import Link from 'next/link';
import SearchBar from '../SearchBar/searchbar';

const NavBar: NextPage = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 fixed top-0 left-0 w-full z-10">
      <img src="/img/Logo.png" className="w-60 h-24" alt="PetVenture Logo" />
      <SearchBar />
<ul className="flex space-x-6">
  <li className="flex items-center">
    <Link href="/nosotros" passHref>
      <p className="text-gray-800 font-semibold hover:text-gray-600 cursor-pointer">Nosotros</p>
    </Link>
  </li>
  <li className="flex items-center">
    <Link href="/adopta" passHref>
      <p className="text-gray-800 font-semibold hover:text-gray-600 cursor-pointer">Adopta</p>
    </Link>
  </li>
  <li className="flex items-center">
    <Link href="/tienda" passHref>
      <p className="text-gray-800 font-semibold hover:text-gray-600 cursor-pointer">Tienda</p>
    </Link>
  </li>
  <li className="flex items-center">
    <Link href="/contacto" passHref>
      <p className="text-gray-800 font-semibold hover:text-gray-600 cursor-pointer">Contacto</p>
    </Link>
  </li>
  <li className="flex items-center">
    <Link href="/registro" passHref>
      <p className="text-gray-800 font-semibold hover:text-gray-600 cursor-pointer">Ingresa/Registrate</p>
    </Link>
  </li>
</ul>

    </div>
  );
};

export default NavBar;
