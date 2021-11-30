import Head from 'next/head'
import Image from 'next/image'
import Menu from '../componets/Menu'
import Footer from '../componets/Footer'
import HeadLayout from '../componets/HeadLeyout'

function Conteudo() {
  return (
<div>

<Head>

  <HeadLayout/>

 </Head>

 <Menu/>

 
<div className="container">
 



 <main className="main">
 


   <iframe className="iframe" src="https://www.youtube.com/embed/CqE82SDuiZI" title="YouTube video player"  
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>


   <p className="description">
     Pega a Visão. Minuto Empreendedor
   </p>

<p className="description">
     O Ambulante
   </p>

   <iframe className="iframe" src="https://www.youtube.com/embed/_miVZih23Ro" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
 

<p className="description">
Apresentação: Associação Brasileira de Desenvolvimento
   </p>



<iframe className="iframe" src="https://www.youtube.com/embed/kccmE9kInrg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

 </main>

 <Footer/>
</div>




</div>




  )
}

export default Conteudo