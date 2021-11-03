import React from "react";
import Template from "../components/Template";
import FileUpload from "../components/FileUpload";
import Navbar from "../components/Navbar";

export default function FileUploadPage() {
  return (
    <>
      <Navbar/>
      <div className="py-10 grid  ">
        <Template downloadTemplate={()=>{alert("download clicked")}}/>
        <FileUpload />
      </div>
    </>
  );
}
