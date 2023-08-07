import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class AlbumService {

    async getAlbums(search) {
        return await axios.post(API_URL+"/albums", {search: search});
    }

}

export default new AlbumService();