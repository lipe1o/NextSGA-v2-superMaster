import { ArrowRightCircle } from 'lucide-react';
import { ReactElement } from 'react';

export default function Smallbox(prop: {
    title: string,
    info: string,
    icon: ReactElement,
    label?: string
    destino?: string
}){

    return(
        <>
            <div className="grid grid-cols-2 w-6/12 min-w-max rounded-xl bg-white drop-shadow">
            
                <div className="select-none py-2 pl-2">
                    <h3 className="m-1 font-bold text-2xl">{prop.title}</h3>
                    <p className="m-1">{prop.info}</p>
                </div>

                <div className="flex justify-end items-center">
                    {prop.icon}                    
                </div>

                <a href={prop.destino} className="flex select-none bg-gray-300 col-span-2 p-2 justify-center rounded-b-xl drop-shadow">
                    {prop.label}<ArrowRightCircle className="mx-1" />
                </a>
            </div>
        </>
    )
}