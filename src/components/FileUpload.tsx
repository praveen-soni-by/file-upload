import React, { useState } from "react";
import FileService from "../services/FileService";
import Alert from "./Alert";
import Error from "./Error";
import Icon from './svg/Icon';

const errors = [
  {
    id: "id",
    message: "message",
  },
];

export default function FileUpload() {
  const [file, setFile] = useState<File>();
  const [result, setResult] = useState<String>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setResult(null);
    setFile(event.target.files[0]);
  };

  const uploadFile = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    FileService.uploadFile(file).then((res: any) => {
      if (res.status === 200) {
        setResult(res.data);
      } else {
        setResult("File upload failed");
      }
      setFile(null);
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto md:w-full  bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex ">
          <div className="w-full">
            <div className="p-4 justify-center align-middle  text-center">
            <span className="text-lg font-bold text-gray-600">
              Upload Template
            </span>
          </div>
            <div className="p-3 ">
              <form>
                <div className="mb-2">
                  <div className="relative h-16 rounded-lg border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div className="absolute">
                      <div className="flex flex-col items-center ">
                        <label className=" absolute justify-center flex h-full w-full">
                          {file?.name ? file.name : "Choose a file to upload"}

                         <Icon.FileUploadIcon/>

                        </label>
                        <input
                          type="file"
                          accept=".xls,.xlsx"
                          className=" opacity-0  cursor-pointer"
                          onChange={handleChange}
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center ">
                <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                <input
                  type="button"
                  onClick={uploadFile}
                  value="Upload"
                  disabled={file?.name == null}
                  className={`w-1/4x h-10 text-base px-5 bg-blue-500 rounded text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer `}
                />
              </div>
              </form>
            
              {/* <div className="flex justify-end p-2 text-sm font-normal items-center text-gray-400 ">
                  <span>Accepted file type:.xls .xlsx only</span>
                </div> */}
            </div>
          </div>
        </div>
        {result && <Alert message={result} />}
      </div>
      {errors.length > 0 && <Error errors={errors} />}
    </>
  );
}
