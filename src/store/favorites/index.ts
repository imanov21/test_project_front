import { createStore } from 'effector';
import { fetchFavoritesList } from './effects/fetchFavoritesList';
import { FavoritesState } from './interfaces';
// import toast from 'cogo-toast';

export const $favoritesStore = createStore<FavoritesState | null>(null);

$favoritesStore.on(fetchFavoritesList.doneData, (_, v) => v);
