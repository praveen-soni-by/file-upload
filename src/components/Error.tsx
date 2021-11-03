
export default function Error({ errors }: any) {
  const errorList = () => {
    return errors.map((error: any) => {
      return (
        <tr className="flex w-full">
          <th className="border-t-0 px-6 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
            {error.id}
          </th>
          <td className="border-t-0 px-6  w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {error.message}
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="py-1 bg-blueGray-50" >
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6     rounded ">
          {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Errors
                </h3>
              </div>
            </div>
          </div> */}

          <div className="block w-full">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead className="flex w-full mb-4 ">
                <tr className="flex w-full">
                  <th className="px-6  w-1/2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    column number
                  </th>
                  <th className="px-6  w-1/2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    error details
                  </th>
                </tr>
              </thead>

              <tbody className="bg-grey-light flex flex-col  overflow-y-scroll  h-56">{errorList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
