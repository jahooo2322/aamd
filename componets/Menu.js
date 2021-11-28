
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
  

  <div className="nav">
    
<div className="background-one">
  <div className="link-container1">
    <a className="link-one" href="/">Inicío</a>
  </div>

</div>


<div className="background-two link-container1">
  <a className="link-two" href="/missao">Missão</a>
</div>



</div>


        </div>

    )

export default Menu