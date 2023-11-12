import './Navbar.css'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2>Party Time</h2>
      <ul>
        <li>
          <NavLink to='/'>Minhas Festas</NavLink>
        </li>
        <li>
          <NavLink to='/party/new' className='btn'>Criar Festas</NavLink>
        </li>
      </ul>
    </nav>
  )
}
