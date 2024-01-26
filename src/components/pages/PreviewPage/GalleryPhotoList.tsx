import { Image } from "../Home/HomePage";
import GalleryPhotoCard from "./GalleryPhotoCard";
import { Container } from "react-bootstrap";

type GalleryPhotoListProps = {
    images: Image[];
}

const GalleryPhotoList = ({ images }: GalleryPhotoListProps) => {
    return (
        <Container className="gallery-card-container">
        {images.map((image: Image) => {
            return <GalleryPhotoCard key={image.id} image={image} />
        })}
        </Container>    
    );
}

export default GalleryPhotoList;