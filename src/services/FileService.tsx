import { gql } from "@apollo/client";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getTemplates = () => {
  return fetch(`${BASE_URL}/templates`)
}


const getResult = () => {
  return fetch(`${BASE_URL}/reports`)
}


const downloadFile = (fileType:string,fileId: string) => {
  fetch(`${BASE_URL}/download/${fileType}/${fileId}`)
    .then(response => {
      response.blob().then(blob => {
        console.log(blob);
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `${fileId}.csv`;
        a.click();
      });
    });
}

const downloadFileLocalPath = (fileName: String) => {
  fetch(`${BASE_URL}/download/test.csv`)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.csv`;
        a.click();
      });
    });
}

const uploadFileGQL = gql`
  mutation uploadFile($input: Upload!) {
    uploadFile(file: $input)
  }
`;

const FileService = { downloadFileLocalPath, uploadFileGQL, getTemplates, downloadFile ,getResult}


export default FileService;
