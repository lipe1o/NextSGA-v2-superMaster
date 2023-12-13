import Rodape from './components/footer'
import Asise from './components/aside'
import Corner from './components/corner'

export default function Home() {
    return (
        <main className='w-screen h-screen'>
            <Rodape></Rodape>
            <Asise></Asise>
            <div className="bg-slate-400 w-4/5 h-5/6 flex items-center justify-center flex-col">
                <p className='text-10xl'>Normal</p>
                <p className='text-11xl'>T004</p>
                <p className='text-10xl'>Guichê 02</p>
            </div>
            <Corner></Corner>
        </main>
    )
}