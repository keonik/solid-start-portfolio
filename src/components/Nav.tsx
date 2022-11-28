import { createSignal } from "solid-js";
import { A } from "solid-start";
import { IoClose, IoMenu } from "solid-icons/io";
export const LINKS = [
  { to: "/about", content: "About" },
  { to: "/blog", content: "Writing" },
  { to: "/projects", content: "Projects" },
  { to: "/contact", content: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);
  return (
    <header class="w-full z-10 fixed bg-slate-900">
      <nav
        role="navigation"
        aria-label="main navigation"
        class="flex items-center justify-between flex-wrap"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6 mb-0">
          <A
            href="/"
            aria-label="Home"
            class="block p-2 lg:inline-block lg:mt-0 lg:px-3 lg:h-full font-light text-lg text-gray-300 hover:text-white hover:bg-slate-800"
            activeClass="bg-sky-800 text-white"
          >
            John Fay
          </A>
        </div>
        <div class="block mr-2 lg:hidden mb-0">
          <button
            onClick={() => setMenuOpen(!menuOpen())}
            class={`flex items-center px-3 py-2 rounded-full text-white hover:text-indigo-200 transition-all duration-500 focus:outline-none  hover:bg-slate-800`}
          >
            {menuOpen() ? (
              <IoClose
                size={24}
                class="transition-all duration-500 ease-in-out"
              />
            ) : (
              <IoMenu
                size={24}
                class="transition-all duration-500 ease-in-out"
              />
            )}
          </button>
        </div>
        <div
          class={` ${
            menuOpen() ? `block` : `hidden`
          } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div class={`text-sm lg:flex-grow`}>
            {LINKS.map(({ content, to }) => (
              <A
                class="block p-2 lg:inline-block lg:mt-0 lg:px-3 lg:h-full font-light text-lg text-gray-300 hover:text-white hover:bg-slate-800 mb-0"
                href={to}
                activeClass="bg-slate-700 text-white"
                aria-label={content}
              >
                {content}
              </A>
            ))}
          </div>
          <div>{/* Right-side actions */}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
