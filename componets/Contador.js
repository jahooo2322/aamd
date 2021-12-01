import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
function Contar() {
 
const [contador, setContar] = useState(1)

const { speak } = useSpeechSynthesis()

const [buttonName, setButton] = useState('Fale com o atendente virtual')
  
   function addContador(){

          setContar(contador + 1)

        //  alert(contador)



          if(contador == 1){
         const  value = 'sejam bem vindos ao site da Associação dos Ambulantes da praia do francês.... Eu sou o Ricardo, seu atendente virtual. Posso apresentar nosso site para você, é só você dizer que sim.'
         const   buttonName = 'Sim... eu desejo continuar'
           
           speak({text: value})
           setButton(buttonName)  
         }

         if(contador == 2){

            const value = 'Muito bem... Então eu posso começar a falar que temos três sessões no site. A primeira é essa página. A inicial.... Temos o conteúdo de vídeo com histórias inspiradoras, de ambulantes exemplos. a terceira sessão é a nossa missão, onde queremos chegar...'
            const   buttonName = 'Entendi. Leia essa página para mim.'

            speak({text: value})
            setButton(buttonName)


        
        }

        if(contador == 3){

         
                                   
        const value = 'Associação dos Ambulantes apresenta. Você sabia que o direito ao trabalho é tema de discussões intrnacionais.......... A organização internacional do trabalho tem como missão definir princípios gerais para garantir condições dignas de trabalho em todo mundo'
        const buttonName = 'voltar ao começo'
        
        speak({text: value})
        setButton(buttonName)
       setContar(contador = 1)
      
            
            }




   }
  return (
    <div>
   

   <button onClick={addContador}>{buttonName}</button>


    </div>
  ); 
}



export default Contar