import css from "./Carts.module.css"
import { Link } from "react-router-dom"
import homeImg from "./image 1.svg"
const HomeCarts = () => {
    return(
            <div className={css.homeCarts}>
                <img src={homeImg} alt="" />
              <p>Продаю 6км дом  в Бишкеке</p>
              <p>55000$</p>
              <button><Link to="/more">Купить</Link></button>
            </div>
    )
}

export default HomeCarts 