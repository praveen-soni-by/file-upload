import React from 'react'

export default function Template(props:any) {
    return (
        <div className="justify-end  align-middle ml-3 absolute right-10">
        <div
          className="bg-white w-60 border border-gray-300 rounded-lg 
          flex flex-col text-sm py-4 px-2 text-gray-500 "
        >
          <div className="flex  py-1 px-2 rounded">
            <label className="block text-left w-full">
              <div className="text-gray-700  font-bold mb-3">
                Download Template
              </div>
              <select className="form-select cursor-pointer block w-full mt-1 font-semibold"
               onChange={props.downloadTemplate}
              >
                <option className="text-base ">Select </option>
                <option className="text-base ">Carrer</option>
                <option className="text-base ">Location</option>
                <option className="text-base ">Shipment</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    )
}
