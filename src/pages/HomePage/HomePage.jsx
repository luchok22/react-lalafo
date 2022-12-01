import css from "./HomePage.module.css"
import HomeCarts from "../../components/Carts/HomeCarst"
import AboutUs from "../../components/Carts/AbouUs/AboutUs"
import { useSelector } from "react-redux"
const HomePage = () => {
    const houses = useSelector((state) => state.houses.data)
    return(
    <main>
        <div className={css.container}>
            <h1>Последние обьявления</h1>
            <div className={css.homeCartsDiv}>
                     {houses.map((item) => <HomeCarts key={item.id} isAdmin {...item} />)}
            </div>
        </div>
        <AboutUs/>
    </main>
    )
}

export default HomePage