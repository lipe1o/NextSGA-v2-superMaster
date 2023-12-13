import CurrentDateComponent from './date'


export default function hour () {
    return(
        <main className="bg-gray-950 text-white py-8 h-1/6 fixed bottom-0 w-1/5 right-0 flex justify-center pt-2">
                    <p className='text-2xl'>
                        <CurrentDateComponent/>
                    </p>
                    <p>
                    </p>
        </main>
    )
}