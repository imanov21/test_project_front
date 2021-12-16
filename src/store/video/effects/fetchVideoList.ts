import { createEffect } from 'effector';
import api from '../../../services/api';

export const fetchVideoList = createEffect(async () => {
    const response = await api.get(`/videos/`);

    return response.data;
});
