
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


const Menu = (props) => (

   <div>
  

  <div class="nav">
    
<div class="background-one">
  <div class="link-container1">
    <a class="link-one" href="/">Inicío</a>
  </div>

</div>


<div class="background-two link-container1">
  <a class="link-two" href="/missao">Missão</a>
</div>



</div>


        </div>

    )

export default Menu