import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_pth}` ||
          `${BASE_URL}${result.poster_pth}`
        }
        alt=""
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className="p-2">
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md ">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} • `}
          {result.release_date || `${result.first_air_date} • `}
          <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
