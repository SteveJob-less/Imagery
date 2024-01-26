import { Image } from "../Home/HomePage";
import GalleryPhotoList from "./GalleryPhotoList";

type GalleryProps = { 
    images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {

    return(
        <section className="gallery">
            <h3> Photos</h3>
            <GalleryPhotoList images={images} />
        </section>
    );
}

export default Gallery;