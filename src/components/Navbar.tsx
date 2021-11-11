import {
    gql, useSubscription
} from '@apollo/client';
import { useEffect, useState } from "react";


export default function Navbar() {
    const [notifications, setNotifications] = useState([]);
    const [isExpended, setExpeded] = useState(false);

    const { data, loading, error } = useSubscription(gql`
    subscription statusWatch {
        status {
            message
            id
            fileName
            timeStamp
        }
    }
`, {});



    useEffect(() => {
        if (data) {
            setNotifications([...notifications, {

                "id": data?.status?.id,
                "timestamp": data?.status?.timeStamp,
                "fileName": data?.status?.fileName,
                "msg": data?.status?.message
            }])
        }
    }, [data])

    return (
        <>
            <nav className="bg-white shadow ">
                <div className="flex justify-end items-center h-14">
                    <div className="flex items-end">
                        <div className=" md:block">

                            <button className="flex  items-end mr-5" onClick={() => setExpeded(!isExpended)}>
                                <div className="inline-flex absolute items-center px-1 py-0.5  border-white rounded-full text-xs font-semibold leading-3 bg-blue-500 text-white">
                                    {notifications.length}
                                </div>
                                <svg className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg></button>
                        </div>
                    </div>
                </div>
            </nav>
            {isExpended &&
                <div className=" shadow-lg flex w-72 absolute top-14 right-2 ">
                    <div className=" w-full mx-h-52 h-52 overflow-auto border-b border-gray-200 ">

                        {notifications?.map(notification => (
                            <div
                                key={notification.id}
                                onClick={() => alert(JSON.stringify(notification))} className="text-sm font-medium cursor-pointer  border border-gray-100
                         bg-white
                         p-3
                         hover:bg-gray-200
                        text-gray-900">
                                {notification.msg}

                            </div>

                        ))}

                    </div>  </div>
            }
        </>
    )
}
