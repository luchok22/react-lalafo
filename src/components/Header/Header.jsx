import css from "./Header.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../redux/authSlice";

const Header = () => {
   const auth = useSelector( (state) => state.auth.isAuth )
   const dispatch = useDispatch()

   const onLogout =  () => {
      dispatch(authSliceActions.logout())
   }
     return(
        <header>
        <div className={css.container}>
          <div className={css.header}>
             <Link to="/"><h1>LOGO</h1></Link>
             <div className={css.header_left}>
              <a href="">О нас</a>
              <a href="">Контакты</a>
              {
               auth ? <button onClick={onLogout}>login out</button> : <Link to="/signUp">Войти</Link> 
              }
              
             </div>
          </div>
        </div>
        </header>
     )
}


export default Header