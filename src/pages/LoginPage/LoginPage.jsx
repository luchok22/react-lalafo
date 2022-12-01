import css from './LoginPage.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSliceActions } from '../../redux/authSlice';
const LoginPage = () => {
   const [login, setLogin] = useState("");
   const [isError, setError] = useState(false);
   const [password, setPassword] = useState("");
   const dispatch = useDispatch()
 const submit = (e) =>{
  e.preventDefault();
  if(login === 'admin' && password === 'admin'){
        dispatch(authSliceActions.login())
  }else{
     setError(true)
  }
 }
     return(
        <div className={css.container}>
            <h1>Войти</h1>
            <form onSubmit={submit} onChange={() => setError(false)}>
            <div className={css.inputLogin}>
            <label>
            <p>Login</p>
            <input 
            type="text"
            value={login} 
            onChange={(e) => setLogin(e.target.value)}/>
            </label>
            <label>
                <p>password</p>
                <input type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
                </label>
              <div className={css.In}>
              <span id='close'><Link to='/'>Close</Link></span>
              <button id='login'><Link >Войти</Link></button>
              {isError && <div>Login or Password is incorrect</div>}
              </div>
              </div>
                </form>

        </div>
     )
}


export default LoginPage