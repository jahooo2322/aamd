import Head from 'next/head'
import Image from 'next/image'
import Menu from '../componets/Menu'
import Footer from '../componets/Footer'
import HeadLayout from '../componets/HeadLeyout'

function Missao() {
  return (
<div>

<Head>
  
  <HeadLayout/>

 </Head>

 <Menu/>



 
<div className="container">
 



 <main className="main">

<Image src="/images/logotip.png" alt="Logo AAMD" width={200} height={200} />



  
   <p className="description">
     Nossa missão é defender os direitos dos Ambulantes e construir estruturas e Serviços de apoio,
     compartilhar informações e conhecimento para o aprimoramento e organização dos Ambulantes da praia do francês, 
     município de Marechal Deodoro, Estado de Alagoas.

   </p>




<Image src="/images/assoc.jpg" alt="Logo AAMD" width={500} height={200} />

 
<p className="description">
    Praia do Francês. Marechal Deodoro. AL
   </p>

   <p className="description">
    Nossa Praia
   </p>

   <Image src="/images/frances-praia.jpg" alt="Logo AAMD" width={800} height={500} />


 </main>




</div>


<Footer/>

</div>




  )
}

export default Missao