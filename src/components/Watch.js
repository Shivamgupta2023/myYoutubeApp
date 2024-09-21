import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import LiveChat from "./LiveChat";
import { generate, makeRandomStrings} from "../utils/constant";

const Watch = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch()

  const chatmessage = useSelector((store) => store.chat.messages)

  const [liveMessage, setLiveMessage] = useState("")

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: makeRandomStrings(30),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="m-5 w-full">
      <div className="flex">
        <div width="w-full">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="">
          <div className="ml-2 p-2 h-[600px] border border-slate-800 w-full overflow-y-scroll flex flex-col-reverse">
            {chatmessage?.map((data, i) => {
              return (
                <LiveChat key={i} name={data.name} message={data.message} />
              );
            })}
          </div>
          <form 
          className="w-full ml-2 p-2 border border-slate-800"
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(
              addMessage({
                name: "Shivam Gupta",
                message: liveMessage,
              })
            );
            setLiveMessage(" ")
          }}
          >
            <input 
            type="text"
            className="m-2 p-2 w-64 border border-slate-950"
            onChange={(e) => setLiveMessage(e.target.value)}
            value={liveMessage || "" }
            >    
            </input>
            <button>
                send
            </button>
          </form>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default Watch;
