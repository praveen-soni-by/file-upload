import React from 'react'
import { IResult } from '../interface/IResult';

export type ContextState = {
    records: IResult[];
    resetResult: (data: IResult[]) => void;
    updateResult: (data: IResult[]) => void;
};

const contextDefaultValues: ContextState = {
    records: [],
    resetResult:()=>{},
    updateResult:() => {}
};

export const ResultContext = React.createContext<ContextState>(contextDefaultValues)


const ContextProvider = ({ children }: any) => {
    const [records, setRecords] = React.useState<any>(contextDefaultValues.records);
    const updateResult = (result: any) => {
        setRecords([...result, ...records])
    }
   
    const resetResult = (result: any) => {
        setRecords([...result])
    }

    return (
        <ResultContext.Provider
            value={{
                records,
                updateResult,
                resetResult
            }}
        >
            {children}
        </ResultContext.Provider>
    )
}

export default ContextProvider