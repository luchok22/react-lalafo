import css from './CreateAd.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import API from '../../api/api';
import { useDispatch } from 'react-redux';
import { housesSliceActions } from '../../redux/housesSlice';
const CreateAd = (props) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate();
  const [isSending, setSending] = useState(false)
  const dispatch = useDispatch()
  const [img, setImg] = useState('')
 const toastError = ()=> toast.error('🦄 Error', {
   position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   });
 const notify = () => toast('Успешно отправлен')
  const submit = (e) => {
     e.preventDefault()
       setSending(true)
     const data = {
      title: title,
      price: price,
      description: desc,
      imgUrl: img,
     }
    //  fetch(base_url + 'houses', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }

    //  })
     API.createAd(data)
    .then(() => {
     setDesc('') 
     setImg('')
     setPrice('')
     setTitle('')
     notify()
     dispatch(housesSliceActions.addHouse(data))
    })
    .then(() => {
      setTimeout(newNav, 5000)
    })
    .catch(() => {
     toastError()
    })
  }
  const newNav = () => {
    navigate('/profile')
  } 

  return (
    <div className={css.container}>
      <h1>Создать объявления</h1>
      <form onSubmit={submit}>
        <div className={css.input}>
          <label>
            <p>Название</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
          </label>
        </div>
        <div className={css.Description}>
          <p>Description</p>
          <p>4/200</p>
          <span>The description will be included on the item's detail page underneath its image.</span>
          <textarea cols="30" value={desc} onChange={(e) => setDesc(e.target.value)} rows="10"></textarea>

        </div>
        <div className={css.Inputimg}>
          <div>
            <p>Картинка для обьявления</p>
          </div>
          <label>
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
          </label>
        </div>
        <div className={css.price}>
          <label>
            <p>Цена</p>
            <span>This link will be hidden from public.</span>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
        </div>
        <div className={css.saveAd}>
          <span><Link to='/profile'>Close</Link></span>
          <button disabled={isSending}>Save</button>
          <ToastContainer/>
        </div>
      </form>
    </div>
  )
}

export default CreateAd
