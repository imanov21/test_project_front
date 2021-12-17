import { createStore } from 'effector';
import { VideoStore, PayloadState, Video } from 'store/shared/interfaces';
import { fetchVideoList } from './effects';
// import toast from 'cogo-toast';

export const $videoStore = createStore<VideoStore>({ list: [], single: null, total: 0 });

$videoStore.on(fetchVideoList.doneData, (state, payload: PayloadState) => ({
    ...state,
    list: payload.results,
    total: payload.count,
}));
