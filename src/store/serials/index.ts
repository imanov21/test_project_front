import { createStore } from 'effector';
import { Video } from 'store/video/interfaces';
import { fetchSerialsList } from './effects/fetchSerialsList';
// import toast from 'cogo-toast';

export const $serialsStore = createStore<Video[] | null>(null);

$serialsStore.on(fetchSerialsList.doneData, (_, v) => v);
