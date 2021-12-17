import { createEffect } from 'effector';
import { FilterParams } from 'store/shared/interfaces';
import { paramsCheck } from 'utils/mapParams';
import api from '../../../services/api';

export const fetchVideoList = createEffect(async () => {
    const response = await api.get(`/videos/`);

    return response.data;
});

// export const fetchVideoList = createEffect(async (payload?: FilterParams) => {
//     const response = await api.get(`/videos/?${paramsCheck(payload)}`);

//     return response.data;
// });
