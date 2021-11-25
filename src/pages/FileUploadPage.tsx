
import { useLayoutEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import Upload from "../components/Upload";
import FileService from "../services/FileService";

const ACCEPTED_TYPE: Array<string> = [".csv"];

export default function FileUploadPage() {

  const [templates, setTemplates] = useState<any>([]);

  const downloadTemplate = (templateId: string) => {
    FileService.downloadTemplate(templateId);
  }

  useLayoutEffect(() => {
    FileService.getTemplates()
      .then(res => res?.json())
      .then(res => setTemplates(res))
  }, [])

  return (
    
    <div className='container-bg'>
      <Navbar templates={templates} downloadTemplate={downloadTemplate} />
      <Upload acceptType={ACCEPTED_TYPE} />
      <Result />
    </div>
  );
}

