import Head from 'next/head'
import Image from 'next/image'



import Menu from '../componets/Menu'
import Footer from '../componets/Footer'
//import Dictaphone from '../componets/Dictaphone'
import HeadLayout from '../componets/HeadLeyout'

//import Falar from '../componets/Fala'
import Contar from '../componets/Contador'
//import App from '../componets/App'



function Home() { 
  return (
<div>

<Head>
 
 

<HeadLayout/>



 </Head>

 

<Menu/>


<div styles="position: absolute">
<a href="https://wa.me/5582987086545" target="_blank" className="whats" rel="noopener noreferrer">
 <Image src="/images/whats.png"  alt="Logo AAMD" width={130} height={130} id="whats"/>
</a>
</div>

<div className="container">

<Contar/>

<span className="logoo">
<Image src="/images/aa.png" alt="Logo AAMD" width={500} height={170} />
</span>
<div className="carta">
<Image src="/images/carta.png" alt="Logo AAMD" width={600} height={320}  />
</div>

<p className="description" id="desc">
     Sejam bem vindos ao nosso site. Todo apoio a este Projeto.
   </p>

 <main className="main">

 <iframe  className="iframe"  src="https://www.youtube.com/embed/sua2AzwkkiU" title="YouTube video player" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 ></iframe>

<p className="description" id='desc2'>
     Unidos em Associações você estará mais forte para garantir os seus direitos. 
     Pelo trabalho vonluntário da diretoria da sua associação, os projetos para o grupo saem do papel.
     Manter contato com o poder público e privado, participando de editais para obtenção de recursos, fazendo
     parcerias com fornecedores e patrocinadores. Esse é o nosso trabalho, voluntário, em prol da defesa dos direitos e desenvolvimento 
     dos Ambulantes associados.
   </p>


<iframe className="iframe" src="https://www.youtube.com/embed/e8AxbhHry8g" title="YouTube video player"  
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  
   <p className="description" id="desc3">
     Estamos auxiliando os Ambulantes com informações importantes na defesa dos direitos
   </p>


<Image src="/images/assoc.jpg" alt="Logo AAMD" width={500} height={200} />

   <p className="description"  id="desc4">
   Associação é uma organização resultante da reunião legal entre duas 
   ou até mais pessoas, com ou sem personalidade jurídica, para a realização de um objetivo comum.
</p>

   <p className="description"  id="desc5">
    Associação e seus Direitos
  
   </p>

   <div className="grid">
     <a href="http://alerjln1.alerj.rj.gov.br/constfed.nsf/fc6218b1b94b8701032568f50066f926/54a5143aa246be25032565610056c224?OpenDocument"
     target="_blank" className="card" rel="noopener noreferrer">

       <h2 id="t1">Constituição Federal</h2>

       <p id="desc6">      
         “Todos são iguais perante a lei, sem distinção de qualquer natureza, 
         garantindo-se aos brasileiros e aos estrangeiros residentes no País a 
         inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança 
         e à propriedade”.</p>
         

     </a>

     <a href="https://www.politize.com.br/artigo-5/liberdade-de-associacao/" target="_blank" 
     className="card" rel="noopener noreferrer">
   
   <div >

   <h2 id="t2">Liberdade de associação</h2>
     <p id="desc7">
     
     A liberdade de associação é garantida no inciso 17 do Artigo 5º da Constituição, 
     que determina que somos livres para criar ou participar de associações desde que 
     seus fins sejam lícitos e que não tenham caráter paramilitar.

     </p>

     </div>


     </a>

     <a
       href="https://www.politize.com.br/artigo-5/livre-constituicao-de-associacoes/" target="_blank"
       className="card" rel="noopener noreferrer">

<h2 id="t3">CONSTITUIÇÃO FEDERAL ARTIGO 5º</h2>

<p id="desc8">
   INCISO 18 – LIVRE CONSTITUIÇÃO DE ASSOCIAÇÕES.

“A criação de associações e, na forma da lei, a de cooperativas independem 
de autorização, sendo vedada a interferência estatal em seu funcionamento”.
       </p>



     </a>

     <a
       href="https://www.politize.com.br/artigo-5/livre-constituicao-de-associacoes/#:~:text=a%20livre%20constitui%C3%A7%C3%A3o%20de%20associa%C3%A7%C3%B5es%20e%20cooperativas,uma%20vida%20mais%20justa%2C%20livre%20e%20igualit%C3%A1ria."
       className="card" target="_blank" rel="noopener noreferrer">
         
         <h2 id="t4">UNIÃO: UM DIREITO DE TODOS   </h2>

         <p id="desc9">       
        Os incisos 17 a 21 do artigo 5º.

       É fundamental para satisfazer as necessidades plurais e coletivas da sociedade, permitindo o agrupamento legal de diversas 
       pessoas em prol de causas econômicas, sociais, políticas, filantrópicas, religiosas, entre outras. 
       </p>
       


     </a>


<div>

  </div>

  <iframe className="iframe" src="https://www.youtube.com/embed/S64VOCY9lRc" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  
   </div>
 </main>



 <Footer/>
 
</div>


</div>




  )
}




export default Home