const columns =[
  "File Name",
  "Error",
  "Uploaded Time" 
]

const data =[{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
},{
  "fileName":"Career.txt",    
  "error":"row 3 , col3 Entity is is missing",
    "timestamp":"2012-12-12 11:00:12",
}
]


export default function Error({ errors }: any) {
  
  
  const errorList = () => {
    return data.map((error: any) => {
      return (
        <tr className="flex">
          <td className="px-2 text-black w-1/2 bg-blueGray-50 text-blueGray-500  border  border-blueGray-100  py-3 text-xs   text-left">
            {error.fileName}
          </td>
          <td className="px-2 text-black w-1/2 bg-blueGray-50 text-blueGray-500  border border-blueGray-100  py-3 text-xs     text-left">
            {error.error}
          </td>
          <td className="px-2 text-black w-1/2 bg-blueGray-50 text-blueGray-500  border border-blueGray-100  py-3 text-xs     text-left">
            {error.timestamp}
          </td>
        
        </tr>
      );
    });
  };

  return (
    <section className="py-1 bg-blueGray-50 j flex justify-center h-screen ">
      <div className="w-3/4  mb-12 xl:mb-0 px-4  mt-6">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6     rounded ">
          {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-black">
                  Errors
                </h3>
              </div>
            </div>
          </div> */}

          <div className="block w-full">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead className="flex w-full  ">
                <tr className="flex w-full">
            
            {columns.map(column =><th className="px-6 text-black  w-1/2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    {column}
                  </th>)}
                  
                
                </tr>
              </thead>

              <tbody className="bg-grey-light flex flex-col    ">
                {errorList()}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center my-12">
    <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div className="flex h-12 font-medium rounded-full bg-gray-200">
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
            <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>
      </div>
    </section>
  );
}
