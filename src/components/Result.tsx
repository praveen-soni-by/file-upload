import React, { useEffect, useState } from 'react';
import FileService from '../services/FileService';
import Loader from './Loader';
import Icon from './svg/Icon';

const Headers = ["Name", "Size", "Status", "Download File", "Error Report", " Updated Date"]

export default function Result() {
    const [results, setResults] = useState<any>([])
    const [isLoading, setLoader] = useState<boolean>(false)

    useEffect(() => {
        setLoader(true);
        FileService.getResult()
            .then(res => res.json())
            .then(res => {
                setResults(res)
                setLoader(false);
            }).catch(err => setLoader(false))
    }, [])

    const downloadFile = (recordId: string) => {
        FileService.downloadFile("file", recordId);
    }

    return (
        <div className="flex justify-center">
            <div className="py-2  sm:px-2 md:px-2 lg:px-10  items-center">
                <p className="text-xl font-semibold p-4 text-white">Recent Files</p>
                <div className=" shadow-md bg-white">
                    <div className="grid  bg-white grid-cols-6 border sticky top-0 z-50 border-b-2 border-gray-100">
                        {Headers.map((headerName) => <div key={headerName} className="table-header font-bold">
                            {headerName}
                        </div>)}
                    </div>

                    <Loader isLoading={isLoading} color="border-primary" classes=" py-2 flex h-12 justify-center  w-full" />
                    {isResultEmpty() &&
                        <div className="
                           grid grid-cols-1 text-center text-lg text-gray-500 py-4 ">
                            No records found
                        </div>
                    }

                    <div className=" max-h-64 divide-y divide-gray-100 overflow-auto custome-scrollbar">
                        {!isResultEmpty() && results.map((record: any) => (
                            displayData(record)
                        ))}
                    </div>


                </div>
            </div>

        </div>
    )

    function isResultEmpty() {
        return !isLoading && results?.length === 0;
    }

    function displayData(record: any) {
        return <div key={record.recordId} className="grid grid-cols-6  ">
            <div className="table-td" title={record.name}>
                <div className='truncate w-36'>
                    <a href="#" onClick={() => downloadFile(record.recordId)} className="link">
                        {record.name}</a></div>
            </div>
            <div className="table-td">
                {record.size}
            </div>
            <div className="table-td">
                <span className={`badge ${record.download ? 'bg-green-100' : 'bg-red-100'}`}>
                    {record.status}
                </span>
            </div>
            <div className={`table-td ${record.download && 'cursor-pointer'}`}>
                {record.download ? <Icon.Download /> : <Icon.Cross />}
            </div>

            <div className={`table-td ${record.download && 'cursor-pointer'}`}>
                {record.download ? <Icon.Download /> : <Icon.Cross />}</div>
            <div className="table-td ">
                {record.updateDate}
            </div>
        </div>;
    }
}
