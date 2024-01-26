import { useState } from "react";
import { Image } from "./HomePage";
import Modal from "./Modal";
import PhotoCardContainer from "./PhotoCardContainer";

type BodyProps = {
    images: Image[] | undefined;
}

const Body = ({ images }: BodyProps) => {
    const [selectedImage, setSelectedImage] = useState<Image>();
    const handleShowImage = (image: Image) => {
        setSelectedImage(image);
    }

    return (
        <>  
            <PhotoCardContainer handleShowImage={handleShowImage} images={images} />
            <Modal 
                selectedImage={selectedImage} 
                setSelectedImage={setSelectedImage} 
            />
        </>
    );     
}

export default Body;