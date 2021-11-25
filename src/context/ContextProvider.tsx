import * as React from 'react'

export type ContextState = {
    records: [];
    resetResult: (data: any) => void;
    updateResult: (data: any) => void;
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