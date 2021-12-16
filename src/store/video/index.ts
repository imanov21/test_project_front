import { createStore } from 'effector';
import { fetchVideoList } from './effects/fetchVideoList';
import { Video } from './interfaces';
// import toast from 'cogo-toast';

export const $videoStore = createStore<Video[] | null>(null);

$videoStore.on(fetchVideoList.doneData, (_, v) => v);
