import { Video } from 'store/shared/interfaces';

export interface FavoritesStore {
    list: Video[];
}

export interface PayloadState {
    favorites: Video[];
}
