import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="container">
        <a href=""> <img src=''/></a>
        <h1>Bonjour,</h1>
        <h3>Heureux de vous (re)voir !</h3>
        <div className='seConnecter'>
            <h4>Connectez-vous à votre compte</h4>
            <br/>
            <input type='email' placeholder='Email'/>
            <br/>
            <input type='password' placeholder="Mot de passe" />
            <br/>
            <a href=''>Mot de passe oublié ?</a>
            <br/>
            <Link to="/signup" className="link-style">Créer mon compte</Link><button className="conn">Se connecter</button>
        </div>
        </div>
    </>
  )
}

export default Login