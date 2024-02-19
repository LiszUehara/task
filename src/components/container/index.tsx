import { ReactNode } from "react";


export default function Container({ children}: {children: ReactNode}){
    return (
        <div className="w-full max-w-7x1 mx-auto px-2">
           {children}
        </div>
    )
}