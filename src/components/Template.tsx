
interface TemplateProps {
  options :Array<string>
  downloadFile?: (val: String) => void;
}

export default function Template({ downloadFile ,options }: TemplateProps) {

  const downloadTemplate = (fileName: String) => {
    if (fileName === "") return;
    downloadFile(fileName);
  }
  return (
    <div
      className="w-full bg-white border-gray-200 rounded-lg text-md py-4 px-4 text-gray-500 ">
      <div className="text-gray-700  font-bold mb-3">Download Template</div>
      <select
        className="form-select border-2  h-11  px-2 cursor-pointer w-full block  mt-1 font-semibold"
        onChange={(e) => downloadTemplate(e.target.value)}
      >
        <option value="">Select </option>
       {options.map(op => <option value={op}>{op}</option>)}
        
      </select>
    </div>
  );
}
