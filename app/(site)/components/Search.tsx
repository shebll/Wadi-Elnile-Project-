"use client";

import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
type props = {
  setState?: Dispatch<SetStateAction<boolean>>;
};
function Search({ setState }: props) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchValue("");
    if (setState) setState!(false);

    router.push(`/searchByName/${searchValue}`);
  }
  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="bg-gray-200 rounded-full flex flex-row  px-4 ">
        <button type="submit" className="outline-none">
          <span className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#919191"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                </g>
              </g>
            </svg>
          </span>
        </button>
        <input
          type="text"
          placeholder="search by name"
          className=" bg-gray-200 rounded-full text-lg px-4 py-2 outline-none text-gray-700 w-[300px] "
          onChange={changeHandler}
          required
          value={searchValue}
        />
      </div>
    </form>
  );
}

export default Search;
