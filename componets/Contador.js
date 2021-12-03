import React, { useState } from 'react';
//import { useEffect } from 'react'

import { useSpeechSynthesis } from 'react-speech-kit';
 
function Contar() {
 
const [contador, setContar] = useState(1)

const { speak } = useSpeechSynthesis()

const [buttonName, setButton] = useState('Fale com o atendente virtual')


function rolar(x, y) { 
    window.scrollTo(x, y); 
}
  
   function addContador(){

          setContar(contador + 1)

        //  alert(contador) / quando muda o contador muda o texto que vai ser falado


           // primeiro texto
          if(contador == 1){
         const  value = 'sejam bem vindos ao site da Associação dos Ambulantes da praia do francês.... Eu sou o Ricardo,... seu atendente virtual. Posso apresentar nosso site para você, é só você dizer que sim. Apertando o botão verde.'
         const   buttonName = 'Sim... eu desejo continuar'
           
           speak({text: value})

          function depois(){
          // seta num novo nome para o botao
           setButton(buttonName)  
          }
          setTimeout(depois, 12000)
           
           
         }

         if(contador == 2){

         

            const   value = 'Muito bem... Eu posso começar a falar que temos três sessões no site. A primeira é essa página.  A página inicial.... na segunda sessão temos o conteúdo de vídeo com histórias inspiradoras,... de ambulantes exemplos, a terceira sessão é a nossa missão, onde queremos chegar  na construção da associação dos ambulantes..... No canto inferior você pode entrar em contato pelo zap. '
            const   buttonName = 'Entendi. Leia essa página para mim.'

            speak({text: value})


            function depois0() {
            function mudaCor() {
                document.getElementById("manipula1").style.background = "#ffff00";
                }
                mudaCor()
            } setTimeout(depois0, 7000)


            
            function depois1() {
                function mudaCor() {
                    document.getElementById("manipula1").style.background = "#4684f8";
                    document.getElementById("manipula2").style.background = "#ffff00";
                    }
                    mudaCor()
                } setTimeout(depois1, 11000)



            
                function depois2() {
                    function mudaCor() {
                        document.getElementById("manipula1").style.background = "#4684f8";
                        document.getElementById("manipula2").style.background = "#4684f8";
                        document.getElementById("manipula3").style.background = "#ffff00";
                        }
                        mudaCor()
                    } setTimeout(depois2, 20000)


                    function depois3() {
                        function mudaCor() {
                            document.getElementById("manipula1").style.background = "#4684f8";
                            document.getElementById("manipula2").style.background = "#4684f8";
                            document.getElementById("manipula3").style.background = "#ffff00";
                            }
                            mudaCor()
                        } setTimeout(depois3, 20000)


                        function depois4() {
                            function mudaCor() {
                                document.getElementById("manipula1").style.background = "#4684f8";
                                document.getElementById("manipula2").style.background = "#4684f8";
                                document.getElementById("manipula3").style.background = "#4684f8";
                                }
                                mudaCor()

                            } setTimeout(depois4, 25000)


                                    
            // outro tempo
            function depois() {
            setButton(buttonName)
            }
            setTimeout(depois, 10000)


        
        }

        // chamar uma função que pegue os valores de titulos e descriçoes e atribua a value
       
        // quais titulos/descricoes pegar?
         

        if(contador == 3){
                        
        const value = 'Associação dos Ambulantes apresenta. Você sabia que o direito ao trabalho é tema de discussões intrnacionais.......... A organização internacional do trabalho tem como missão definir princípios gerais para garantir condições dignas de trabalho em todo mundo'
        const buttonName = 'Ou pular o vídeo'
        
        speak({text: value})

        function depois(){
        setButton(buttonName)
   
        rolar(0, 500)

     // pegando o valor aqui do elemento pelo id, e mandar falar
     const value = document.getElementById("desc").firstChild.nodeValue + "..... este vídeo fala sobre as associações, é uma ótima oportunidade de conhecer melhor o que é uma associação. Assista este vídeo..."
     speak({text: value})


        }
        // chamar uma função 3 seg. depois
        setTimeout(depois, 20000);



            }

        if(contador == 4){

        rolar(0, 1050)
 // pegando o valor aqui do elemento pelo id, e mandar falar
 const value = document.getElementById("desc2").firstChild.nodeValue + "..... este vídeo fala sobre o voluntário... Assistem e entedam a importância de participar"
 const buttonName = 'Continue lendo o site'
 speak({text: value})

 function depois() {
     // depois de 6 segundos muda o nome do botao
    setButton(buttonName)
    }
    setTimeout(depois, 6000)

         }
         
         if(contador == 5){

            // pegando o valor aqui do elemento pelo id, e mandar falar
            
            const desc3 = document.getElementById("desc3").firstChild.nodeValue
            const desc4 = document.getElementById("desc4").firstChild.nodeValue
            const desc5 = document.getElementById("desc5").firstChild.nodeValue
            
            const value = desc3+"........"+desc4+"........"+desc5+"....... previsto na constituição federal."
            const buttonName = 'Continue lendo...'
            speak({text: value})
            
          
            rolar(0, 1850)

            function depois() {
                // depois de 6 segundos muda o nome do botao
               setButton(buttonName)
               }
               setTimeout(depois, 6000)

               

            
                     }
            


                     if(contador == 6){

                        // pegando o valor aqui do elemento pelo id, e mandar falar
                        const t1 = document.getElementById("t1").firstChild.nodeValue
                        const desc6 = document.getElementById("desc6").firstChild.nodeValue
                        const t2 = document.getElementById("t2").firstChild.nodeValue
                        const desc7 = document.getElementById("desc7").firstChild.nodeValue
                        const t3 = document.getElementById("t1").firstChild.nodeValue
                        const desc8 = document.getElementById("desc8").firstChild.nodeValue
                        const t4 = document.getElementById("t1").firstChild.nodeValue
                        const desc9 = document.getElementById("desc9").firstChild.nodeValue
                        
                        const value = t1+"........."+desc6+"............"+t2+"........."+desc7+"........"+t3+"........"+desc8+"........."+t4+"........."+desc9 + "........ Agradecemos por chegar até aqui. O último vídeo fala mais sobre os seus direitos. Obrigado."

                        const buttonName = 'Voltar ao início...'
                        speak({text: value})
                        
                        rolar(0, 2200)

                     

                        
                        function depois() {
                            // depois de 6 segundos muda o nome do botao
                           setButton(buttonName)
                           }
                           setTimeout(depois, 6000)


                           function depois4() {                            
                           rolar(0, 3000)
                           }
                           setTimeout(depois4, 24000)


                        
                                 }

                               

                                 if(contador == 7){
                                    const buttonName = 'Fale com o atendente virtual'

                                   
                                    rolar(0,0)

                                    setContar(contador = 1)
                                    setButton(buttonName)

                                 }



   }
  return (
    <div>
  
   <button id="virtual" className="atendente" onClick={addContador}>{buttonName}</button>


    </div>
  ); 
}



export default Contar