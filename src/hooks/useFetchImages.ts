import { fetchImages, search } from "../api/unsplashAPI";
import { Image } from "../components/pages/Home/HomePage";

type Data = Image[] | [];

async function useFetchImages(query: string | undefined) {
    try {
        let data: Data = [];
        if(query) {
            data = await search(query);
        } else {
            data = await fetchImages();
        }
        
        return data;
    } catch(error) {
        console.error("Error fetching Searched Data", error);
    }
}

export default useFetchImages;