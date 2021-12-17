import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchSerialsList = createEffect(async () => {
    const response = await api.get(`/serials/`);

    return response.data;
});
export const fetchSerial = createEffect(async (filmId: number) => {
    const response = await api.get(`/serials/${filmId}/`);

    return response.data;
});
export const createSerial = createEffect(async () => {
    // const response = await api.get(`/films/`);
    // return response.data;
});
