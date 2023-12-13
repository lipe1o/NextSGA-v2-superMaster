import Smallbox from "./components/smallbox"
import StackedList from "./components/stackedlist"

import { UsersRound, Tags, Monitor, Settings, Speech } from "lucide-react"

export default function Dashboard() {
    return (
      <main className="grid grid-cols-3 bg-gray-200 h-screen">
        
          <div className="flex flex-col gap-4 self-center place-items-center">
            <Smallbox title={6..toString()}  icon={<UsersRound className="mr-4" size={38} />} info="Usuários" destino=""/> 
            <Smallbox title={12..toString()} icon={<Tags       className="mr-4" size={38} />} info="Fila" destino=""/>
            <Smallbox title={6..toString()}  icon={<Speech     className="mr-4" size={38} />} info="Mesa" destino=""/>
            <Smallbox title={"Painel"}       icon={<Monitor    className="mr-4" size={38} />} info="Senha" destino="http://localhost:3000/painel"/>
            <Smallbox title={"Sistema"}      icon={<Settings   className="mr-4" size={38} />} info="Configuração" destino=""/>
          </div>
          
          <div className="m-4 col-span-2 p-4 drop-shadow-xl rounded-xl bg-white select-none">
            <StackedList />
          </div>
      </main>
  )
}