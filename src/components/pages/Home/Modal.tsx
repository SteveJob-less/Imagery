import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Image } from "./HomePage";
import { useNavigate } from "react-router-dom";

type params = Image | undefined;

type ShowModalProps = {
    selectedImage: params;
    setSelectedImage: (x: params) => void;
}

const ShowModal = ({ selectedImage, setSelectedImage }: ShowModalProps) => {
    const [opacity, setOpacity] = useState(0);
    const photoFullsize = `Fullsize: ${selectedImage?.width} x ${selectedImage?.height}`;
    const user = {
        name: selectedImage?.user.name,
        username: selectedImage?.user.username,
        dp: selectedImage?.user.profile_image.large,

    }

    const navigate = useNavigate();
 
    const handleCloseModal = () => { setSelectedImage(undefined) } // Set selectedImage to undefined to close modal
    
    const handleImageHover = (isHovered: boolean) => {
        const value = isHovered? 1: 0;
        setOpacity(value);
    }

    // If photo's height > width, set photo default size to min-img-height
    // If photo's height < width or heigth === width, set photo default size to min-img-width
    const imgSize = (() => {    
        if(selectedImage && selectedImage?.height > selectedImage?.width) return "min-img-height" 
        if(selectedImage && selectedImage?.height < selectedImage?.width) return "min-img-width"
        if(selectedImage?.height === selectedImage?.width) return "min-img-width";
    })();

    const handleRedirectToViewPhoto = () => {
        const url = `/view/${user.username}/${selectedImage?.id}`;
        navigate(url);
    } 

    return (
        <Modal show={selectedImage !== undefined} onHide={ handleCloseModal } centered>
            <Modal.Header closeButton>
                <Modal.Title>Full-size Image</Modal.Title>
            </Modal.Header>
            {/* TODO: Add component to handle ERROR for case like faile image load */}
            {selectedImage && (
            <Modal.Body className="overflow-hidden">
                <img 
                    src={selectedImage.urls.full} 
                    alt={selectedImage.alt_description} 
                    onMouseEnter={() => handleImageHover(true)}
                    onMouseOut={() => handleImageHover(false)}
                    onClick={() => handleRedirectToViewPhoto()}
                    className={`d-flex border border-dark ${imgSize}`} 
                />
                <div className={`photo-details-container`} style={{ opacity: opacity }}>
                    <div className="user-description">
                        <div className="user-card">
                            <img src={user.dp} alt={`${user.name} profile pic`} />
                            <a href="">{user.name}</a>
                        </div>
                        <h5 className="">{photoFullsize}</h5>
                    </div>
                </div>
            </Modal.Body>
            )}
            <p className='d-flex justify-content-center mt-0'>Click on the image to view gallery.</p>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowModal;