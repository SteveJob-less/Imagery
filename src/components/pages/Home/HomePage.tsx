import { useState, useEffect } from "react";
import Header from "../Header";
import Body from "./Body";
import { useParams } from "react-router-dom";
import useFetchImages from "../../../hooks/useFetchImages";


export type Image = {
    id: string;
    urls: {
        regular: string;
        full: string;
    }
    alt_description: string;
    width: number;
    height: number;
    user: {
        username: string;
        name: string;
        profile_image: {
            large: string;
        }
    }
}

const HomePage = () => {
    const [images, setImages] = useState<Image[]>();
    const { query } = useParams<{ query: string }>();


    useEffect(() => {   
        (async () => {
            try {
                const data = await useFetchImages(query);
                setImages(data);
            } catch(error) {
                console.error("useFetchImage hook error:", error);
            }
        })();
    }, [query]);

    return (
        <>
            <Header />
            <Body images={images} />
        </>
    );
}

export default HomePage;