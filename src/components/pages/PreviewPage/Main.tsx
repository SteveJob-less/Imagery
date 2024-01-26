import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { Image } from "../Home/HomePage";
import Preview from "./Preview";

type MainProps = {
    images: Image[];
    viewedImgId?: string;
}

const Main = ({ images, viewedImgId }: MainProps) => {
    const [selectedImg, setSelectedImg] = useState<Image>();

    useEffect(() => {
        const filteredImg = images.find((image) => image.id === viewedImgId);
        
        setSelectedImg((prev) => prev = filteredImg);
    }, [viewedImgId]);

    return ( 
        <main>
            <Preview image={selectedImg} imgId={viewedImgId} /> 
            <Gallery images={images} />
        </main>
    );
}

export default Main;