export default function Error({ errors }: any) {
  
  
  const errorList = () => {
    return errors.map((error: any) => {
      return (
        <tr className="flex">
          <td className="px-2 text-black w-1/2 bg-blueGray-50 text-blueGray-500  border  border-blueGray-100  py-3 text-xs   text-left">
            {error.id}
          </td>
          <td className="px-2 text-black w-1/2 bg-blueGray-50 text-blueGray-500  border border-blueGray-100  py-3 text-xs     text-left">
            {error.message}
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="py-1 bg-blueGray-50 ">
      <div className="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-6">
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
                  <th className="px-6 text-black  w-1/2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    column number
                  </th>
                  <th className="px-6  text-black w-1/2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    error description
                  </th>
                </tr>
              </thead>

              <tbody className="bg-grey-light flex flex-col  overflow-y-scroll  h-56">
                {errorList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
