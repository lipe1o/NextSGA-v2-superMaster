export default function Input(prop: { name: string, type: string}){
    return(
        <>
            <label htmlFor={prop.name} className="block text-sm font-medium text-black">{prop.name}</label>
            <div className="mt-2">
                <input required className="text-black bg-white drop-shadow border-2 border-black p-3 rounded" id={prop.name} type={prop.type}></input>
            </div>
        </>
    )
}