import css from "./Carts.module.css"
import { Link } from "react-router-dom"
import API from "../../api/api"
import { useDispatch } from "react-redux"
import { deleteById, housesSliceActions } from "../../redux/housesSlice"
const HomeCarts = ({id, imgUrl, title, price, isAdmin}) => {
  const dispatch = useDispatch()
  const onDelete = () => {
    const res = window.confirm("Удалить?")
    if(res) {
      dispatch(deleteById(id))
        // fetch(`${base_url}houses/${id}`, {
        //   method: "DELETE"
        // })
    }
  }
    return(
            <div className={css.homeCarts}>              
                <img src={imgUrl} alt="5" />
              <p>{title}</p>
              <p>{price}</p>
              {
                isAdmin ? <button><Link to={`/more/${id}`} >Подробне</Link></button>  : 
                <button onClick={onDelete}>Удалить</button>
              }
            </div>
    )
}

export default HomeCarts 