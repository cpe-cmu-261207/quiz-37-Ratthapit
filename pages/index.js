import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

export default function Home() {
  const [comms, setComms] = useState([]);

  const allComment = [];
  for (const x of comments.data) {
    allComment.push(x);
  }
  setComms(allComment);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <MainLayout></MainLayout>
      </div>

      {comms.map((x) => (
        <Comment key={x.username} {...x} />
      ))}
    </div>
  );
}
