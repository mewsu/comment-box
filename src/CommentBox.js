import React, { useState } from "react";
import avatarImage from "../img/avatar.png";
import data from "./data.json";

const CommentBox = () => {
  const [commentBody] = useState(data.commentBody);
  const [userName] = useState(data.userName);

  const [userRole] = useState(data.userRole);
  const [timeAgoPosted] = useState(data.timeAgoPosted);
  const [replyCount] = useState(data.replyCount);
  const [upvoteCount, setUpvoteCount] = useState(data.upvoteCount);
  const [downvoteCount, setDownvoteCount] = useState(data.downvoteCount);

  const [colorWeight, setColorWeight] = useState("");

  const onHover = () => {
    setColorWeight("darker");
  };

  const onBlur = () => {
    setColorWeight("");
  };

  const onUpvote = () => {
    setUpvoteCount(upvoteCount + 1);
  };

  const onDownvote = () => {
    setDownvoteCount(downvoteCount - 1);
  };

  return (
    <div
      className="comment-container"
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
    >
      <span className="user-picture">
        <img className="avatar-img" src={avatarImage} alt="User's avatar" />
      </span>
      <div className="top-row bigger">
        <span className="user-name">{userName}</span>
        <span className="user-role">
          <span className="role-pill">{userRole}</span>
        </span>
        <span className="time-posted bolder">
          &#183; {timeAgoPosted} MINUTES AGO
        </span>
      </div>

      <span className="comment-body bigger">{commentBody}</span>
      <div className="bottom-row">
        <span className={`reply-button palegray-smaller ${colorWeight}`}>
          REPLY
        </span>
        <span className={`reply-count palegray-smaller ${colorWeight}`}>
          <span className="bolder">{replyCount}</span> REPLIES
        </span>
        <span
          role="button"
          tabIndex="0"
          className={`upvote-button palegray-smaller ${colorWeight}`}
          onClick={onUpvote}
          onKeyPress
        >
          &#8593; {upvoteCount}
        </span>
        <span
          role="button"
          tabIndex="0"
          className={`downvote-button palegray-smaller ${colorWeight}`}
          onClick={onDownvote}
          onKeyPress
        >
          &#8595; {downvoteCount}
        </span>
      </div>
    </div>
  );
};

export default CommentBox;
