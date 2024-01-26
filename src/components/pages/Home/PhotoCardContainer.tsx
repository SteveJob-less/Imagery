import { Container } from "react-bootstrap";
import { Image } from "./HomePage";
import PhotoCard from "./PhotoCard";

type PhotoCardContainerProps = {
    images: Image[] | undefined;    
    handleShowImage: (image : Image) => void;
}

const PhotoCardContainer = ({ images, handleShowImage }: PhotoCardContainerProps) => {

    return (
        <>
            <Container className='body'>
            {images?.map((image) => (
                <PhotoCard key={image.id} image={image} handleShowImage={handleShowImage} />
                ))} 
            </Container>;
        </>
    )
}

export default PhotoCardContainer;