import AlbumService from "../../services/AlbumService";

export default {
    async fetchAlbums({ commit }, {search}) {
        try {
            console.log(search);
            const response = await AlbumService.getAlbums(search);
            commit('SET_ALBUMS', response.data);
        } catch (error) {
            console.log(error);
        }
    }
}