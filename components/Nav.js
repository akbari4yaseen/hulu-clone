import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <ul className="flex px-10 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide sm:px-20 sm:space-x-20">
        {Object.entries(requests).map(([key, { title }]) => (
          <li
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-10"
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
