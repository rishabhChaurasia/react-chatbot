import React from "react";
import { Skeleton, Slide } from "@mui/material";

const ChatLoader = () => {
  return (
    <div className="chatLoader">
      <Slide direction="right" in={true} timeout={200}>
        <Skeleton
          height={"1.3rem"}
          animation={"pulse"}
          sx={{
            background:
              "linear-gradient(90deg, rgba(138,118,211,1) -8%, rgba(177,171,171,1) 79%)",
          }}
        />
      </Slide>
      <Slide direction="right" in={true} timeout={300}>
        <Skeleton
          height={"1.3rem"}
          animation={"wave"}
          sx={{
            background:
              "linear-gradient(90deg, rgba(138,118,211,1) -8%, rgba(177,171,171,1) 79%)",
          }}
        />
      </Slide>
      <Slide direction="right" in={true} timeout={400}>
        <Skeleton
          height={"1.3rem"}
          width={"22rem"}
          animation={"pulse"}
          sx={{
            background:
              "linear-gradient(90deg, rgba(138,118,211,1) -8%, rgba(177,171,171,1) 79%)",
          }}
        />
      </Slide>
    </div>
  );
};

export default ChatLoader;
