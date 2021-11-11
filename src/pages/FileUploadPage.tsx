import Error from "../components/Error";
import FileUpload from "../components/FileUpload";
import Template from "../components/Template";
import FileService from "../services/FileService";

const errors: Array<any> = [{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"}];
const ACCEPTED_TYPE: Array<String> = [".csv"];

export default function FileUploadPage() {

  const downloadTemplate = (fileName: String) => {
    FileService.downloadFileLocalPath(fileName);
  }

  return (
    <>
      <div className="flex py-6 justify-center h-screen ">
        <div className="bg-gray-100 h-3/6
            text-white font-bold  sm:w-3/4 md:w-3/4 rounded-lg   lg:w-1/2 ">
          <div className="grid grid-cols-2 gap-2  md:grid-cols-5 ">
            <div className="bg-white col-span-2 px-2  md:col-span-3">
              <FileUpload acceptType={ACCEPTED_TYPE} />
            </div>

            <div className="bg-white col-span-2 px-2 ">
              <Template downloadFile={downloadTemplate} />
            </div>
          </div>
          {/* {errors?.length > 0 && <Error errors={errors} />} */}
        </div>
      </div>

    </>
  );
}
