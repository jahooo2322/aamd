import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

 
function Falar() {
 // const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();


var key = 1

 

 

 // o valor de key de variar conforme o valor dele enviado pelo click
  
  var value = ''
  var buttonName = ''
  


if(key == 1){
   value = 'sejam bem vindos ao nosso site.... Eu sou o Ricardo, seu atendente virtual. Posso apresentar nosso site para você. você deseja continuar? eu pergunto.'
   buttonName = 'Fale com o atendente virtual'
   
   
   
}

if(key == 2){
     value = 'Muito bem... Então eu posso começar a falar que temos tres sessoes no site. A primeira é essa página. A inicial.... Temos temos o conteúdo de vídeo com histórias inspiradora, se ambulantes exemplos, a terceira sessão é a nossa missão.'
     buttonName = 'Sim... eu desejo continuar'
     
  }


  

  return (
    <div>
        
      <button id="clicks" onClick={() => speak({text: value})}>{buttonName}</button>


    </div>
  ); 
}

export default Falar