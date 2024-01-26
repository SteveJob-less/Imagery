import { useEffect, useState } from "react";
import { Image } from "../Home/HomePage";
import ImageNotFound from "./ImageNotFound";

type PreviewProps = {
    image?: Image;
    imgId: string | undefined;
}

const Preview = ({ image, imgId }: PreviewProps) => {
    const [viewImgSize, setViewImgSize] = useState("");
    const bgImg = {
        backgroundImage: `url(${image?.urls.regular})`,
    };

    useEffect(() => {
        if(image && image?.height <= image?.width) {
            setViewImgSize("view-min-w");
        } else {
            setViewImgSize("view-min-h");
        }
    }, []);

    if (!imgId) {
        const prompt = "Select photo to view";
        return <ImageNotFound prompt={prompt} />;   
    }
    if (imgId && !image) {
        const prompt = "Image not found";
        return <ImageNotFound prompt={prompt} />;
    }

    return (
        <section className="view-photo-card" >
            <div style={bgImg as React.CSSProperties} className="filter-blur"></div>
            <img 
                src={image?.urls.full} 
                alt={image?.alt_description} 
                className={`view-img ${viewImgSize}`}
            />
        </section>
    );
}

export default Preview;