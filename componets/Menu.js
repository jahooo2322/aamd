
/* adicionando (props) => () transformamos esse codigo jsx

const Menu = (
<nav>
    <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Login</li>
    </ul>
</nav>
)

em componetes react

*/
//import Link from 'next/link'
//import  '../styles/Menu.module.css';
import Image from 'next/image'

const Menu = (props) => (

   <div>
  

  <div className="nav">
 
<div className="background-one">
  <div className="link-container1">
    <a className="link-one" href="/">
      <span className="material-icons">home</span>
</a>
  </div>

</div>

<div className="background-two link-container1">
  <a className="link-two" href="/conteudo">
  <span class="material-icons">
videocam
</span>
  </a>
</div>

<div className="background-three link-container1">
  <a className="link-three" href="/missao">Missão</a>
</div>



</div>


        </div>

    )

export default Menu