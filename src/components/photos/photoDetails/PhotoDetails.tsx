import { Box, Button, Card, Grid } from '@mui/material';
import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MainLayout from '../../../layouts/MainLayout'
import { IPhoto } from '../../../types/photosTypes';
import st from './PhotoDetails.module.scss';

type PhotoDetailsParams = {
    id: string;
}

const PhotoDetails: FC = () => {
    const { details } = useTypedSelector(state => state.photos);
    const navigate = useNavigate();
    const params = useParams<PhotoDetailsParams>()
    const { fetchPhotosDetail } = useActions();
    const detail: IPhoto = details

    useEffect(() => {
        fetchPhotosDetail(params.id!)
    }, [])

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card>
                    <Grid container justifyContent='space-between'>
                        <Box p={3} className={st.information}>
                            <h1>{detail.user?.name}</h1>
                            <h3>Location: {detail.user?.location}</h3>
                            {detail?.profile_image?.small ?
                                <img src={detail?.profile_image?.small} alt='User avatar' /> :
                                null
                            }
                            <p>Description: {detail.description ? detail.description : 'unknown'}</p>
                            <p>Bio: {detail.user?.bio ? detail.user?.bio : 'unknown'}</p>
                            <p>Total likes: {detail.user?.total_likes}</p>
                            <p>Total photos:{detail.user?.total_photos}</p>
                            <p>Camera: {detail.exif?.make ? detail.exif?.make : 'unknown'}</p>
                            <p>Model: {detail.exif?.model ? detail.exif?.model : 'unknown'}</p>
                            <Button variant='outlined' onClick={()=> navigate(-1) }>Back</Button>
                        </Box>
                        <Box>
                            <div className={st.image}>
                                <img src={detail?.urls?.full} alt='photo' />
                            </div>
                        </Box>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default PhotoDetails