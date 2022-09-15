import React from "react";
import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";

export default function MainLayout(props) {
  return (
    <div>
      <PostOwner />
      {props.children}
      <Comment />
      <Reply />
    </div>
  );
}
