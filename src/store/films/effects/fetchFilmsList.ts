import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchFilmsList = createEffect(async () => {
    const response = await api.get(`/films/`);

    return response.data;
});
