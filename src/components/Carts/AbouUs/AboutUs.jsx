import css from './AboutUs.module.css'
import AboutImg from './image 2.jpg'
const AboutUs = () =>{
    return( 
<div className={css.container}>
    <h1>О нас</h1>
      <div className={css.aboutus}>
        <img src={AboutImg} alt="" />
       <div>
         <h1>Кто мы?</h1>
         <p>Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться на второй президентский срок. Несмотря на свой возраст (ему было 65 лет на момент избрания), серьёзные проблемы со здоровьем и низкий предвыборный рейтинг, Ельцин решил принять участие в Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться </p>
        </div>
      </div>
 </div>
    )
}

export default AboutUs