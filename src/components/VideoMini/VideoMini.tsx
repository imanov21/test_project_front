import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Video } from 'store/shared/interfaces';
import { useStyles } from './styles';

export const VideoMini = (props: Video) => {
    const classes = useStyles();

    return (
        <div className={classes.Item}>
            <div className={classes.thumbText}>
                <strong className={classes.thumbTitle}> {props.title} </strong>
                <div className={classes.textItem}>
                    <span>{props.description}</span>
                </div>
            </div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.thumbsLink}
                to={`/video/${props.id}`}
                component={Link}
            >
                Open
            </Button>
        </div>
    );
};
