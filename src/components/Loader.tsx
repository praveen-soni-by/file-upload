interface ILoadingProps{
    classes?:string,
    color?:string,
    isLoading:boolean
}

export default function Loader({classes,isLoading,color}:ILoadingProps) {

     if(!isLoading) return <></>
     
    return (
        <div className={classes}>
        <div
            style={{ borderTopColor: "transparent" }}
            className={`w-8 h-8  border-4 border-white  border-solid
            ml-6 
            rounded-full animate-spin ${color} `}></div>
            </div>
    )
}
