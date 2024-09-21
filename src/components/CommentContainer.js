import React from 'react'

const commentData = [
  {
    name: "Shivam Gupta",
    text: "this is my kind of content",
    reply: [],
  },
  {
    name: "Shivam Gupta",
    text: "this is my kind of content",
    reply: [
      {
        name: "Shivam Gupta",
        text: "this is my kind of content",
        reply: [],
      },
      {
        name: "Shivam Gupta",
        text: "this is my kind of content",
        reply: [
          {
            name: "Shivam Gupta",
            text: "this is my kind of content",
            reply: [
              {
                name: "Shivam Gupta",
                text: "this is my kind of content",
                reply: [],
              },
              {
                name: "Shivam Gupta",
                text: "this is my kind of content",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Gupta",
    text: "this is my kind of content",
    reply: [
      {
        name: "Shivam Gupta",
        text: "this is my kind of content",
        reply: [],
      },
    ],
  },
];

const CommentContainer = () => {

    const Comment = ({ data }) => {
      return (
        <div className="flex m-2">
          <img
            className="h-8"
            alt="comment"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s"
          />
          <div className="mx-2">
            <p className="font-bold">{data.name}</p>
            <p>{data.text}</p>
          </div>
        </div>
      );
    };

    const CommentList = ({data}) => {
      return data.map((comments) => {
        return (
         <>  
        <Comment data={comments}/>
        <div className='mx-4 pl-4 border border-l-black'>
            <CommentList data={comments.reply}/>
        </div>
        </> 
        );
      });
    };

  return (
    <div className='m-4'>
        <div className='font-bold'>
        Comments:
        </div>
        <CommentList data={commentData}/>
    </div>
  )
}

export default CommentContainer