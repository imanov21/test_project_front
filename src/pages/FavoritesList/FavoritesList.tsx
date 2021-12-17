import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { v4 as uuid } from 'uuid';
import { $videoStore } from 'store/video';
import { fetchVideoList } from 'store/video/effects';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { useStyles } from './styles';

export const FavoritesList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VideoBox key={uuid()} title="Favorites" option="favorites" />
        </div>
    );
};
