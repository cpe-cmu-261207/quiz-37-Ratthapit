import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/profile.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          Pimpitcha kanitpanyajaroen 640610654
        </span>
      </div>
      <span>ขอฮาวทูเรียนยังไงให้รอด F</span>
      <div className="d-flex align-items-center gap-1">
        <img src="/Sad.svg" width={20}></img>
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">666 คน</span>
      </div>
      <hr className="m-0" />
    </div>
  );
}
