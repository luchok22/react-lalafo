import css from './LoginInput.module.css'
import LoginInputTwo from '../LoginInputTwo/LoginInputTwo'
const LoginInput = () =>{
    return(
    <div className={css.inputLogin}>
        <p>Login</p>
        <input type="text" />
    <LoginInputTwo/>
    </div>
    )
}

export default LoginInput