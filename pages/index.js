import Head from 'next/head'
import Image from 'next/image'
import Menu from '../componets/Menu'
import Footer from '../componets/Footer'


function Home() {
  return (
<div>

<Head>
   <title>Associação dos Ambulantes</title>
   <meta name="description" content="Generated by create next app" />
   <link rel="icon" href="/favicon.ico" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>



 </Head>

<Menu/>



 
<div className="container">





 <main className="main">


<Image src="/images/logotip.png" alt="Logo AAMD" width={200} height={200} />

   <h2 className="title">
   Sejam bem vindos ao nosso site
   </h2>

   <p className="description">
     Estamos auxiliando os Ambulantes com informações importantes
   </p>


<Image src="/images/assoc.jpg" alt="Logo AAMD" width={500} height={200} />

   <p className="description">
   Associação é uma organização resultante da reunião legal entre duas 
   ou até mais pessoas, com ou sem personalidade jurídica, para a realização de um objetivo comum.
</p>

   <p className="description">
    Associação e seus Direitos
  
   </p>

   <div className="grid">
     <a href="http://alerjln1.alerj.rj.gov.br/constfed.nsf/fc6218b1b94b8701032568f50066f926/54a5143aa246be25032565610056c224?OpenDocument"
     target="_blank" className="card" rel="noopener noreferrer">
       <h2>Constituição Federal</h2>
       <p> 
         “Todos são iguais perante a lei, sem distinção de qualquer natureza, 
         garantindo-se aos brasileiros e aos estrangeiros residentes no País a 
         inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança 
         e à propriedade”.</p>
     </a>


 

     <a href="https://www.politize.com.br/artigo-5/liberdade-de-associacao/" target="_blank" 
     className="card" rel="noopener noreferrer">
     <p>
     <h2>Liberdade de associação</h2>
     A liberdade de associação é garantida no inciso XVII do Artigo 5º da Constituição, 
     que determina que somos livres para criar ou participar de associações desde que 
     seus fins sejam lícitos e que não tenham caráter paramilitar.

     </p>
     </a>

     <a
       href="https://www.politize.com.br/artigo-5/livre-constituicao-de-associacoes/" target="_blank"
       className="card" rel="noopener noreferrer">

       <h2>CONSTITUIÇÃO FEDERAL ART. 5º&rarr;</h2>

<p> INCISO XVIII – LIVRE CONSTITUIÇÃO DE ASSOCIAÇÕES </p>

       <p>
“A criação de associações e, na forma da lei, a de cooperativas independem 
de autorização, sendo vedada a interferência estatal em seu funcionamento”
       </p>



     </a>

     <a
       href="https://www.politize.com.br/artigo-5/livre-constituicao-de-associacoes/#:~:text=a%20livre%20constitui%C3%A7%C3%A3o%20de%20associa%C3%A7%C3%B5es%20e%20cooperativas,uma%20vida%20mais%20justa%2C%20livre%20e%20igualit%C3%A1ria."
       className="card" target="_blank" rel="noopener noreferrer">
         
       <h2>UNIÃO: UM DIREITO DE TODOS &rarr;</h2>
       <p>
        Os incisos XVII a XXI do art. 5º.
       É fundamental para satisfazer as necessidades 
       plurais e coletivas da sociedade, permitindo o agrupamento legal de diversas 
       pessoas em prol de causas econômicas, sociais, políticas, filantrópicas, 
       religiosas, entre outras. 
       </p>
     </a>


<div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/S64VOCY9lRc" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
></iframe>
  </div>


   </div>
 </main>

 
 
</div>

<Footer/>

</div>




  )
}

export default Home