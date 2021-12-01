import { gql } from "@apollo/client";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getTemplates = () => {
  return fetch(`${BASE_URL}/templates`)
}

const downloadTemplate = (templateId: string) => {
  fetch(`${BASE_URL}/templates/${templateId}`)
    .then(response => {
      response.blob().then(blob => {
        console.log(blob);
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `${templateId}.csv`;
        a.click();
      });
    });
}

const NotificationSubscriberQuery = gql`
      subscription statusWatch {status}
    `

const getResult = () => {
  return fetch(`${BASE_URL}/files`)
}


const downloadUploadFile = (fileType: string, fileId: string, fileName: string) => {
  fetch(`${BASE_URL}/files/${fileType}/${fileId}`)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `${fileType}-${fileName}`;
        a.click();
      });
    });
}

const uploadFileGQL = gql`
  mutation uploadFile($input: Upload!) {
    uploadFile(file: $input){
      id
      tenant_id
      fileName
      status
      uploadedBy
      isFileExist
      uploadedDate
    }
  }
`;

const FileService = { NotificationSubscriberQuery, uploadFileGQL, getTemplates, downloadTemplate, downloadUploadFile, getResult }


export default FileService;
