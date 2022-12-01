import css from './AboutHome.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import API from '../../api/api'
const AboutHome = () =>{
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const images =[
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
        "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg",
        "https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"
    ]

    useEffect(() =>{
        // fetch(`${base_url}houses/${id}`)
        API.getById(id)
        .finally(() => {
            setLoading(false)
        })
        .then((res) => setData(res.data))
        // .then((res) => res.json())
        // .then((data) => {
        //     setData(data)
        // })
    }, [id])
    
  if(isLoading || data === null) {
    return <h1>...Loading</h1>
}

    return(
    <div className='container d-flex'>
        <p><Link to='/'>GO BACK</Link></p>
    <div className={css.more}>
        <div>
            <Carousel width={600}>
                <img src={data.imgUrl} alt="#" />
                {
                    images.map((item) => <img src={item} alt="#"/>)
                }
            </Carousel>
        </div>
        <div>
        <h1>{data.title}</h1>
        <h2>{data.price}$</h2>
        <h3>{data.description}</h3>
        <p></p>
        </div>
    </div>
 </div>
    )
}

export default AboutHome