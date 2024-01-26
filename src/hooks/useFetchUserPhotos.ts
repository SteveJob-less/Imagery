import { fetchUserPhotos } from "../api/unsplashAPI";


async function useFetchUserPhotos(username: string | undefined) {
    return await fetchUserPhotos(username);
}

export default useFetchUserPhotos;