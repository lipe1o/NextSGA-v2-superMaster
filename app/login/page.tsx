import Image from 'next/image'
import Input from './components/input'

export default function Home() {
    return (
  
      <main className="grid grid-cols-3 min-h-full h-screen ">
        
        <div className="grid col-span-2">
          <h1 className="bg-slate-600">bg</h1>
          <Image
            src="/background.jpg"
            quality={80}
            fill
            alt="fila"
          />
        </div>

        <div className="grid justify-center content-center bg-slate-100 border-l-2 border-black drop-shadow">

          <form className="border-black m-4" action="/dashboard" >
            
            <Input name="Login" type="text"/>
            <Input name="Senha" type="password"/>
            
            <div>
              <button className="flex w-full justify-center bg-green-600 py-3 text-sm font-semibold text-black shadow-sm hover:bg-green-500 rounded my-4 border-2 border-black" type='submit'>Login</button>
            </div>

          </form>
        </div>
  
      </main>
  )
}