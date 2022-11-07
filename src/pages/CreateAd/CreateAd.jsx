import css from './CreateAd.module.css'

const CreateAd = () =>{
  return(
    <div className={css.container}>
     <h1>Создать объявления</h1>
     <div className={css.input}>
            <p>Название</p>
            <input type="text" />
        </div>
        <div className={css.Description}>
            <div>
            <p>Description</p>
            <p>4/200</p>
            </div>
            <span>The description will be included on the item's detail page underneath its image.</span>
            <input type="text" />
        </div>
    </div>
  )
}

export default CreateAd
