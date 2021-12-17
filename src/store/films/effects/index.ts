import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchFilmsList = createEffect(async () => {
    const response = await api.get(`/films/`);
    return response.data;
});
export const fetchFilm = createEffect(async (filmId: number) => {
    const response = await api.get(`/films/${filmId}/`);
    return response.data;
});
export const createFilm = createEffect(async () => {
    // const response = await api.get(`/films/`);
    // return response.data;
});
