import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Loader from "./Loader";
import Icon from "./svg/Icon";
import FileService from "../services/FileService";
import { ResultContext } from "../context/ContextProvider";

interface FileUploadProps {
    acceptType?: Array<String>
}

const FILE_UPLOAD_SUCESS = "File uploaded Successfully";
const FILE_UPLOAD_FAILURE = "File upload failed";


export default function Upload({ acceptType }: FileUploadProps) {
    const [file, setFile] = useState<File>();
    const [message, setMessage] = useState<String>();
    const [isFileNotSupported, setFileNotSupported] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(true);
    const [uploadFileMutation, { loading }] = useMutation(FileService.uploadFileGQL);
    const { updateResult} = React.useContext(ResultContext) 

    useEffect(() => {
        setTimeout(() => {
            setMessage(null)
        }, 8000)
    }, [loading])

    const uploadFile = (e: any): void => {
        e.preventDefault();
        resetFormFields();
        if (file.size === 0) {
            alert(`Selected File ${file.name} is Empty`)
            return;
        }

        uploadFileMutation({
            variables: { input: file },
        }).then((res: any) => {
            let isUploaded = res?.data?.uploadFile;
            updateResult([{
                ...res.data.uploadFile,
                'uploadedDate':formatDate(res.data.uploadFile.uploadedDate)
            }])
            setError(!isUploaded)
            setFile(null)
            setMessage(isUploaded ? FILE_UPLOAD_SUCESS : FILE_UPLOAD_FAILURE)

        }).catch((err: any) => {
            setError(true)
            setMessage(FILE_UPLOAD_FAILURE)
        })
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let file = event.target.files[0];
        setFile(file);
        validateFileType(file?.name);
        resetFormFields();
    };

    const resetFormFields = () => {
        setError(false)
        setMessage(null)
    }

    const validateFileType = (fileName: String) => {
        let fileExtension = fileName?.split(".");
        if (fileExtension?.length > 0 && !acceptType.includes("." + fileExtension[1])) {
            setFileNotSupported(true)
        } else {
            setFileNotSupported(false)
        }
    }

    const clearForm = () => {
        setFile(null)
        setFileNotSupported(false)
    }
    
    return (
        <div className="container z-50 flex  justify-center items-center mt-6 ">
            <form onSubmit={uploadFile} >
                <div className="relative">
                    <input type="file"
                        disabled={loading}
                        accept={acceptType.toString()}
                        onChange={handleChange}
                        className="h-14 absolute opacity-0" />
                    <input type="input"
                        defaultValue={file?.name}
                        className="h-14 w-96 pl-8 shadow-md  text-gray-600  pr-20 truncate rounded-full z-0 focus:shadow focus:outline-none border border-2 border-blue-100" />
                    <label htmlFor="file" className={`floating-label  ${file?.name ? " -top-0 text-xs" : " top-4 text-base "}`}>Browse File...</label>

                    <div className="absolute top-1 right-2 flex justify-center items-center">
                        {file &&
                            <button
                                disabled={loading}
                                className="mr-2 cursor-pointer" onClick={clearForm}>
                                <Icon.Cross />
                            </button>
                        }
                        <button
                            disabled={isDisabled()}
                            className="h-12 w-20 font-medium text-white rounded-full bg-primary disabled:bg-primary-light disabled:opacity-70 disabled:cursor-not-allowed">
                            {loading ? <Loader isLoading={loading} /> : "Upload"}
                        </button>
                    </div>
                </div>
                <span className="flex items-center justify-center m-auto mt-2 text-white
                  w-56">{isFileNotSupported ? `Only ${acceptType} files are supported` : ""}</span>
            </form>

            <div id="toast" className="alert-container max-w-12  " role="alert">
                <Alert message={message} isError={isError} />
            </div>
        </div>
    )

    function formatDate(res: any) {
        return new Date(new Date(res).getTime() - new Date(res).getTimezoneOffset() * 60000).toISOString().replace("T", " ").substr(0, 19);
    }

    function isDisabled(): boolean {
        return isFileNotSupported || file?.name == null || loading;
    }

}
