import { createStore } from 'effector';
import { Video } from 'store/video/interfaces';
import { fetchFilmsList } from './effects/fetchFilmsList';
// import toast from 'cogo-toast';

export const $filmsStore = createStore<Video[] | null>(null);

$filmsStore.on(fetchFilmsList.doneData, (_, v) => v);
