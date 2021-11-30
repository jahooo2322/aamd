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


 <Image src="/images/aa.png" alt="Logo AAMD" width={500} height={170} />
 
<div className="container">
 



 <main className="main">
 


   <iframe width="560" height="415" src="https://www.youtube.com/embed/CqE82SDuiZI" title="YouTube video player"  
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>


   <p className="description">
     Pega a Visão. Minuto Empreendedor
   </p>

<p className="description">
     O Ambulante
   </p>

   <iframe width="560" height="415" src="https://www.youtube.com/embed/_miVZih23Ro" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
 

<p className="description">
Apresentação: Associação Brasileira de Desenvolvimento
   </p>



<iframe width="560" height="415" src="https://www.youtube.com/embed/kccmE9kInrg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

 </main>


</div>


<Footer/>

</div>




  )
}

export default Conteudo