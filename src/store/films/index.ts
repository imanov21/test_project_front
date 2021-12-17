import { createStore } from 'effector';
import { VideoStore, PayloadState, Video } from 'store/shared/interfaces';
import { fetchFilmsList, fetchFilm, createFilm } from './effects';
// import toast from 'cogo-toast';

export const $filmStore = createStore<VideoStore>({ list: [], single: null, total: 0 });

$filmStore.on(fetchFilmsList.doneData, (state, payload: PayloadState) => ({
    ...state,
    list: payload.results,
    total: payload.count,
}));

$filmStore.on(fetchFilm.doneData, (state, payload: Video) => ({
    ...state,
    single: payload,
}));

// $filmStore.on(createFilm.doneData, (state, payload: PayloadState) => ({
//     ...state,
//     list: payload.results,
//     total: payload.count,
// }));
