import css from "./HomePage.module.css"
import HomeCarts from "../../components/Carts/HomeCarst"
import AboutUs from "../../components/Carts/AbouUs/AboutUs"
const HomePage = () => {
    return(
    <main>
        <div className={css.container}>
            <h1>Последние обьявления</h1>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
            <HomeCarts/>
        </div>
        <AboutUs/>
    </main>
    )
}

export default HomePage