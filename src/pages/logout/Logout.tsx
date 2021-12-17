import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import { logoutEvent } from 'store/auth/events/logout';
import { $authStore } from 'store/auth';
import { TOKEN_KEY } from '../../constants';

const Logout = () => {
    const authUser = useStore($authStore);
    const token = localStorage.getItem(TOKEN_KEY);
    const navigate = useNavigate();

    useEffect(() => {
        if ((authUser && token) || token) {
            logoutEvent();
        }

        console.log('logout');
        navigate('/login');
    }, []);

    return <></>;
};

export default Logout;
