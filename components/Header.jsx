import Image from "next/image";
import logo from "../public/jl_logo.svg";

function Header() {
  return (
    <header className='fixed z-50 flex items-center justify-between w-screen p-3 border-b-4 border-solid border-dark-blue bg-dark-bg'>
      <div className=''>
        <Image priority src={logo} alt='Lienhard.dev logo' />
      </div>
      <div className='content-center pr-3'>This is the header</div>
    </header>
  );
}

export default Header;
