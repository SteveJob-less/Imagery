import { Card } from "react-bootstrap";
import { Image } from "./HomePage"

type PhotoCardProps = {
    image: Image;
    handleShowImage: (i: Image) => void;
}

const PhotoCard = ({ image, handleShowImage }: PhotoCardProps) => {
    return (
        <Card onClick={() => handleShowImage(image)} >
            <Card.Img 
                src={image.urls.regular} 
                alt={image.alt_description}
            />              
        </Card>
    );
}

export default PhotoCard;