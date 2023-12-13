import React from 'react';
import { format } from 'date-fns'; // Importando a função format do date-fns
import { ptBR } from 'date-fns/locale';

export default function Aside() {
    const currentDate = new Date(); // Obtendo a data atual

    // Formatando a data para o formato desejado
    const formattedDate = format(currentDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    return (
        <>
            {formattedDate}   
        </>
    )
}