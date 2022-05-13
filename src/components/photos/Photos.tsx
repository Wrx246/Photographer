import { Button, Pagination, PaginationItem, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { IPhoto } from '../../types/photosTypes';
import st from './Photos.module.scss';


const Photos: FC = () => {
  const { photos, error, loading } = useTypedSelector(state => state.photos)
  const { fetchPhotos } = useActions();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPage] = useState(13134)

  useEffect(() => {
    fetchPhotos(page, 20);
  }, [page])

  return (
    <MainLayout>
      <div className={st.cards_wrapper}>
        {photos.map((photo: IPhoto) =>
          <div key={photo.id} className={st.card}>
            <div className={st.front}>
              <div className={st.image}>
                <img src={photo.urls.raw} alt='alt' />
              </div>
            </div>
            <div className={st.back}>
              <span className={st.desc}>Autor: {photo.user?.name}</span>
              <span className={st.desc}>Location: {photo.user?.location ? photo.user?.location : 'Unknown'}</span>
              <span className={st.desc}>Likes: {photo.likes ? photo.likes : '0'}</span>
              <Button onClick={() => navigate(`/photos/${photo.id}`)} variant='contained' color='primary'>Details</Button>
            </div>
          </div>
        )}
      </div>
      <Stack spacing={2}>
        <Pagination 
        page={page} 
        onChange={(_, num)=> setPage(num)} 
        count={totalPage} 
        variant="outlined" 
        sx={{ marginY: 3, marginX: 'auto'}}
        renderItem={
          (item) => (
            <PaginationItem
              component={Link}
              to={`/photos/?page=${item.page}`}
              {...item}
              />
          )
        }
        color="primary" />
      </Stack>
    </MainLayout>
  )
}

export default Photos

{/* <div className={st.info}>
<p className={st.title}>Autor: {photo.user?.name}</p>
<p className={st.title}>Location: {photo.user?.location ? photo.user?.location : 'Unknown'}</p>
<p className={st.title}>Likes: {photo.likes ? photo.likes : '0'}</p>
</div> */}