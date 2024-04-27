"use client";
import { players } from "@/utils/playersData";
import axios from "axios";

const UpdateDetails = () => {
  const uploadData = async () => {
    for (const player of players)
      axios
        .post("/api/upload", player)
        .then(() => {
          console.log("updated", player);
        })
        .catch((error) => {
          console.log("Failed");
        });
  };
  return (
    <div>
      <h1>Upload data</h1>
      <button onClick={uploadData}>upload test players list</button>
    </div>
  );
};

export default UpdateDetails;
