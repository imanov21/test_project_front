import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchFavoritesList = createEffect(async (userId: number) => {
    const response = await api.get(`/favorites/${userId}`);

    return response.data;
});
