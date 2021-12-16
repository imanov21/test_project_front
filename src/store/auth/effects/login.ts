import { AxiosResponse } from 'axios';
import { createEffect } from 'effector';
import jwtDecode from 'jwt-decode';
import { TOKEN_KEY } from '../../../constants';
import { LoginPayload } from '../interfaces';
import { fetchAuthUser } from './fetchAuthUser';
import api from '../../../services/api';

export const loginFx = createEffect(async (payload: LoginPayload) => {
    const authResponse: AxiosResponse = await api.post('/api/token/', payload);
    const { access: accessToken } = authResponse.data;
    localStorage.setItem(TOKEN_KEY, accessToken);

    // @ts-ignore
    const { user_id: userId } = jwtDecode(accessToken);

    const response = await fetchAuthUser(userId);

    return response;
});
