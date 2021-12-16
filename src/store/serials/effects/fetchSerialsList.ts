import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchSerialsList = createEffect(async () => {
    const response = await api.get(`/serials/`);

    return response.data;
});
