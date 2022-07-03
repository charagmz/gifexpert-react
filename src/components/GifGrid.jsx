import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    
    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // //para disparar efectos secundarios  
    // useEffect(() => {
    //     // getGifs(category).then(newImages => setImages(newImages));
    //     getImages();
    // },
    //  []);//si esta vacio solo se ejecuta la primera vez

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando ...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}
