import { VideoForm } from 'components/VideoForm/VideoForm';
import { useStyles } from './styles';

export const Video = (props: any) => {
    const classes = useStyles();

    const videoExample = {
        title: 'Some title',
        description: 'some description',
    };

    return (
        <div className={classes.container}>
            <VideoForm />
            <div className={classes.formWrapper}>
                <h1 className={classes.title}>{videoExample.title}</h1>
                <div className={classes.formInner}>
                    {/* <div className={classes.videoExampleImgWrapper}>
                            <img className={classes.videoExampleImg} src="" alt="" />
                        </div> */}
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Description</span>
                        <div className={classes.ItemDescription}>{videoExample.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
