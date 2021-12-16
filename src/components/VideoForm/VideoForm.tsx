import { useStyles } from './styles';

export const VideoForm = (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h1 className={classes.title}>Video add form</h1>
                <div className={classes.formInner}>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Name</span>
                        <div className={classes.ItemDescription}>input</div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>Description</span>
                        <div className={classes.ItemDescription}>input</div>
                    </div>
                    <div className={classes.Item}>
                        <span className={classes.ItemTitle}>next property...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
