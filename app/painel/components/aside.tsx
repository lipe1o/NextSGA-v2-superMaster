import ReactDOM from 'react'

export default function Aside() {
    return(
        <>
            <aside className="bg-gray-300 h-full w-1/5 py-8 fixed right-0">
                <span>
                    <p className="text-gray-800 flex justify-center text-5xl mt-6 mb-6">Histórico</p>
                </span>
                <span>
                    <p className="flex ml-6 mt-12 text-7xl text-gray-800 font-bold">T003</p>
                    <p className="flex ml-6 text-gray-800 text-3xl italic">SRS 01</p>
                </span>
                <span>
                    <p className="flex ml-6 mt-12 text-7xl text-gray-800 font-bold">T002</p>
                    <p className="flex ml-6 text-gray-800 text-3xl italic">SRS 01</p>
                </span>
                <span>
                    <p className="flex ml-6 mt-12 text-7xl text-gray-800 font-bold">T001</p>
                    <p className="flex ml-6 text-gray-800 text-3xl italic">SRS 01</p>
                </span>
                
            </aside>
        </>
    )   
} 