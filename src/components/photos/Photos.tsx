import { Button } from '@mui/material';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { IPhoto } from '../../types/photosTypes';
import st from './Photos.module.scss';




const Photos: FC = () => {
  const {photos, error, loading} = useTypedSelector(state => state.photos)
  const {fetchPhotos} = useActions();
  const navigate = useNavigate();

  useEffect(()=> {
    fetchPhotos(1, 20);
  },[])

  return (
    <MainLayout>
      <div className={st.cards_wrapper}>
        {photos.map((photo: IPhoto) =>
          <div key={photo.id} className={st.card}>
            <div className={st.front}>
              <div className={st.image}>
                <img src={photo.urls.raw} alt='alt' />
              </div>
              {/* <div className={st.info}>
                <p className={st.title}>Autor: {photo.user?.name}</p>
                <p className={st.title}>Location: {photo.user?.location ? photo.user?.location : 'Unknown'}</p>
                <p className={st.title}>Likes: {photo.likes ? photo.likes : '0'}</p>
              </div> */}
            </div>
            <div className={st.back}>
              <span className={st.desc}>Autor: {photo.user?.name}</span>
              <span className={st.desc}>Location: {photo.user?.location ? photo.user?.location : 'Unknown'}</span>
              <span className={st.desc}>Likes: {photo.likes ? photo.likes : '0'}</span>
              <Button onClick={()=> navigate(`/photos/${photo.id}`) } variant='contained' color='primary'>Details</Button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default Photos