import { createStore } from 'effector';
import { fetchFavoritesList } from './effects';
import { FavoritesStore, PayloadState } from './interfaces';
// import toast from 'cogo-toast';

export const $videoStore = createStore<FavoritesStore>({ list: [] });

$videoStore.on(fetchFavoritesList.doneData, (state, payload: PayloadState) => ({
    ...state,
    list: payload.favorites,
}));
