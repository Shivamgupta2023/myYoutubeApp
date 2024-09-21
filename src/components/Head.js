import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu} from "../utils/appSlice"
import { YOUTUBE_SEARCH_KEY } from "../utils/constant";
import { cacheSearch } from "../utils/searchSlice";

const Head = () => {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState("")
  const [queryData, setQueryData] = useState([])
  const [showSuggestions, setShowSuggestion] = useState(false)

  const searchData = useSelector(store => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchData[searchQuery]) {
        setQueryData(searchData[searchQuery]);
      } else {
        getSearchQuery();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_KEY + searchQuery)
    const jsonData = await data.json()
    setQueryData(jsonData[1])
    dispatch(cacheSearch({[searchQuery]: jsonData[1]}))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  const getSearhSuggestionData = () => {
    return queryData.map((itm, idx) => {
      return (
        <>
        {idx < 8 && <div className="">
          <ul>
            <li className="m-2">{itm}</li>
          </ul>
        </div>}
        </>
      );
    });
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkDucqjsAw3xHF9p0Ltd1TocnHnlxM0T-4w&s"
        ></img>
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn78-S8UXnnjuhc9lo5hUxuk3_Yb8NJKFQBw&s"
        ></img>
      </div>

      <div className="col-span-10 px-10">
        <div className="">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && searchQuery && <div className="fixed w-80 h-56 bg-slate-50">
          {getSearhSuggestionData()}
        </div>}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s"
        ></img>
      </div>
    </div>
  );
};

export default Head;
