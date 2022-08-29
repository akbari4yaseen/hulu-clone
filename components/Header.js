import {
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
const Header = () => {
  return (
    <header className="flex flex-col m-5 items-center justify-between h-auto sm:flex-row">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="trending" Icon={ArrowTrendingUpIcon} />
        <HeaderItem title="veryfied" Icon={CheckBadgeIcon} />
        <HeaderItem title="collections" Icon={RectangleStackIcon} />
        <HeaderItem title="search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
