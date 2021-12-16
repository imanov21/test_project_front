import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchAuthUser = createEffect(async (userId: number) => {
    const response = await api.get(`/users/${userId}/`);

    return response.data;
});
