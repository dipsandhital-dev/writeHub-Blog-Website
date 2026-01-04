import { Star } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="relative mx-8 sm:mx-16 xl:mx-24 text-center mt-20">
      {/* Badge */}
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
        <p>Now: AI Features Integrated</p>
        <Star className="w-4 h-4" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-gray-700 sm:leading-tight">
        Your own <span className="text-primary">blogging</span> <br /> platform
      </h1>

      {/*  Description */}
      <p className="my-6 sm:my-8  maz-w-2xl mx-auto text-gray-500 max-sm;text-xs">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand your story
        starts right here.
      </p>

      {/*  Search  */}
      <form className="flex justify-between max-w-lg  mx-auto bg-white broder border-gray-300 rounded-overflow-hidden shadow-sm max-sm:scale-75">
        <input
          type=" text"
          placeholder="Search for blogs"
          required
          className="w-full pl-4 outline-none text-sm "
        />

        <button
          className="bg-primary text-white px-8 py-2 m-1.5 rounded transtation-transform duration-200 hover:scale-105 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
