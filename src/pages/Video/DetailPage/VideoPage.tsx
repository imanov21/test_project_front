import { VideoForm } from 'components/VideoForm/VideoForm';
import { useStore } from 'effector-react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { $videoStore } from 'store/video';
import { Video } from 'store/shared/interfaces';
import { useStyles } from './styles';

export const VideoPage = () => {
    const classes = useStyles();
    const { list } = useStore($videoStore);
    const { id } = useParams();
    const video: Video | undefined = list.find(obj => obj.id === (id ? +id : 0));
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClose = () => {
        setIsOpen(!isOpen);
        navigate('/home');
    };

    return (
        <>
            {video ? (
                <div className={classes.container}>
                    <div className={classes.formWrapper}>
                        <h1 className={classes.title}>{video.title}</h1>
                        <div className={classes.formInner}>
                            {/* <div className={classes.videoExampleImgWrapper}>
                        <img className={classes.videoExampleImg} src="" alt="" />
                    </div> */}
                            <div className={classes.Item}>
                                <span className={classes.ItemTitle}>Description</span>
                                <div className={classes.ItemDescription}>{video.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                navigate('/')
            )}
        </>
    );
};
