import { List } from "phosphor-react";
import { useState } from "react";
import logo from "../assets/logo-segueme.png";
import logoMenu from "../assets/logo-navbar.png";

export function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className="p-6 bg-[#ED9701] flex justify-between">
      <img
        src={logo}
        alt="logo do encontro segue-me dizendo somos um batalhão de amor"
      />
      <button>
        <List
          onClick={handleMenu}
          size={42}
          className="hover:bg-[#ffffffce] p-2 rounded "
        />

        {isOpenMenu && (
          <div className="absolute top-0 max-h-[100%] min-h-[100%] min-w-[12rem] right-0 flex flex-col bg-[#ED9701] transition ease-in-out delay-150 duration-500 border-[1px] border-black">
            <div className="p-2 items-center flex flex-col justify-between mt-16">
              <List
                onClick={handleMenu}
                size={42}
                className="mb-8 hover:bg-[#ffffffce] p-2 rounded "
              />
              <div className="flex flex-col justify-between gap-4 text-2xl min-h-[300px] min-w-full">
                <section className="flex flex-col justify-between min-h-[200px]">
                  <h1 className="hover:bg-[#ffffffce] min-w-[100%] min-h-[60px] flex items-center justify-center">
                    Inicio
                  </h1>
                  <h1 className="hover:bg-[#ffffffce] min-w-[100%] min-h-[60px] flex items-center justify-center">
                    Sobre
                  </h1>
                  <h1 className="hover:bg-[#ffffffce] min-w-[100%] min-h-[60px] flex items-center justify-center">
                    Contato
                  </h1>
                  <h1 className="hover:bg-[#ffffffce] min-w-[100%] min-h-[60px] flex items-center justify-center">
                    Galeria
                  </h1>
                </section>
              </div>
              <img
                className="flex justify-center flex-col"
                src={logoMenu}
                width={120}
                alt="logo do encontro segue-me dizendo somos um batalhão de amor"
              />
            </div>
          </div>
        )}
      </button>
    </header>
  );
}
