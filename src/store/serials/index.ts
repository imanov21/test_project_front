import { createStore } from 'effector';
import { VideoStore, PayloadState, Video } from 'store/shared/interfaces';
import { fetchSerialsList, fetchSerial, createSerial } from './effects';
// import toast from 'cogo-toast';

export const $serialsStore = createStore<VideoStore>({ list: [], single: null, total: 0 });

$serialsStore.on(fetchSerialsList.doneData, (state, payload: PayloadState) => ({
    ...state,
    list: payload.results,
    total: payload.count,
}));

$serialsStore.on(fetchSerial.doneData, (state, payload: Video) => ({
    ...state,
    single: payload,
}));

// $serialsStore.on(createFilm.doneData, (state, payload: PayloadState) => ({
//     ...state,
//     list: payload.results,
//     total: payload.count,
// }));
