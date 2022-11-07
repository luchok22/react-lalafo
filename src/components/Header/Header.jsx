import css from "./Header.module.css"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import LoginPage from "../../pages/LoginPage/LoginPage"

const Header = () => {
     return(
        <header>
        <div className={css.container}>
          <div className={css.header}>
             <Link to="/"><h1>LOGO</h1></Link>
             <div className={css.header_left}>
              <a href="">О нас</a>
              <a href="">Контакты</a>
              <Link to="/signUp">Войти</Link>
             </div>
          </div>
        </div>
        </header>
     )
}


export default Header