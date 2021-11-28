import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../componets/Menu'
import Footer from '../componets/Footer'


function Home() {
  return (
<div>


<div class="main">

 <Menu/>

<div class="content">

<div class="texto">
  
<div class={styles.container}>
 <Head>
   <title>Associação dos Ambulantes</title>
   <meta name="description" content="Generated by create next app" />
   <link rel="icon" href="/favicon.ico" />
 </Head>

 <main class={styles.main}>



<Image src="/images/logotip.png" alt="Logo AAMD" width={200} height={200} />

   <h2 class={styles.title}>
   Associação dos Ambulantes
   </h2>

   <p class={styles.description}>
     Nossa missão é contruir uma Associação com Estrutura e Serviços de informações para os Ambulantes
   </p>


<Image src="/images/assoc.jpg" alt="Logo AAMD" width={500} height={200} />

 
 </main>


 <Footer/>

</div>

</div>

</div>


</div>


</div>


  )
}

export default Home