import { Card } from "react-bootstrap";
import { Image } from "../Home/HomePage";
import { useNavigate } from "react-router-dom";

type GalleryPhotoCardProps = {
    image: Image;
}

const GalleryPhotoCard = ({ image }: GalleryPhotoCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const username = image.user.username;
        const id = image.id;
        const url = `/view/${username}/${id}`;

        navigate(url);
    }

    return (
        <Card className="gallery-card">
            <img 
                src={image.urls.regular} 
                alt={image.alt_description}
                onClick={() => handleClick()}
            />
        </Card>
    );
}

export default GalleryPhotoCard;