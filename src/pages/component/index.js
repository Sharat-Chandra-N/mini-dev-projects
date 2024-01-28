import React from "react";
import { HomeHeart } from "@styled-icons/boxicons-regular/HomeHeart";
import { useNavigate } from "react-router-dom";
import { Space } from "antd";

const RenderComp = ({ comp, basepath }) => {
  const nav = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Space size="large">
          <HomeHeart
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav(basepath);
            }}
          />
          <h2 style={{ textAlign: "center" }}> Mini React Project</h2>
        </Space>
      </div>
      {comp}
    </>
  );
};

export default RenderComp;
