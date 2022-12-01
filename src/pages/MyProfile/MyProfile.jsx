import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import HomeCarts from "../../components/Carts/HomeCarst"
import css from './MyProfile.module.css'

const MyProfile = () => {
    const houses = useSelector((state) => state.houses.data)
    return (
        <div className={css.container}>
            <button><Link to="/creatAdd">Добавить</Link></button>
            <h1>Мои обьявления</h1>

            <div className={css.houses}>
                {houses.map((item) => <HomeCarts key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default MyProfile