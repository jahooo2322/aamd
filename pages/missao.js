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

<Image src="/images/aa.png" alt="Logo AAMD" width={600} height={170} />



  
   <p className="description">
     Nossa missão é defender os direitos dos Ambulantes e construir estruturas e Serviços de apoio,
     compartilhar informações e conhecimento para o aprimoramento e organização dos Ambulantes da praia do francês, 
     município de Marechal Deodoro, Estado de Alagoas.

   </p>




<Image src="/images/fundo01.jpg" alt="Logo AAMD" width={800} height={500} />

 

   <p className="description">
    Nossa Praia linda Praia do Francês
   </p>

   <Image src="/images/frances-praia.jpg" alt="Logo AAMD" width={800} height={500} />


 </main>


 <Footer/>

</div>




</div>




  )
}

export default Missao