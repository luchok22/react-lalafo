import css from './LoginPage.module.css'
import LoginInput from '../LoginInput/LoginInput'
import { Link } from 'react-router-dom'
const LoginPage = () => {
     return(
        <div className={css.container}>
            <h1>Войти</h1>
              <LoginInput/>
              <div className={css.In}>
              <span id='close'><Link to='/'>Close</Link></span>
              <button id='login'><Link to='/createAdvt'>Войти</Link></button>
              </div>

        </div>
     )
}


export default LoginPage