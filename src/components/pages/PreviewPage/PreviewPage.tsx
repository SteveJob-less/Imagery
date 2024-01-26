import { useEffect, useState } from "react";
import { Image } from "../Home/HomePage";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Main from "./Main";
import useFetchUserPhotos from "../../../hooks/useFetchUserPhotos";

const PreviewPage = () => {    
    const [images, setImages] = useState<Image[]>([]);
    const { username, imgId } = useParams<{username: string, imgId: string}>();


    useEffect(() => {
        (async () => {
            try {
                const data = await useFetchUserPhotos(username);
                setImages(data);
            } catch(error) {
                console.error("Error fetching user photos", error);
            }
        })();
    }, [username]);

    return (
        <>
            <Header />
            <Main 
                images={images} 
                viewedImgId={imgId} 
            />
        </>
    ); 
}

export default PreviewPage;