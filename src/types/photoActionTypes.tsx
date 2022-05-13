export interface IState {
    photos: any[];
    details: any;
    loading: boolean;
    error: null | string;
}

export enum PhotoActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_FAILED = 'FETCH_PHOTOS_FAILED',
}

interface FetchPhotoAction {
    type: PhotoActionTypes.FETCH_PHOTOS;
}
interface FetchPhotoSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS;
    payload: any[];
}
interface FetchPhotoFailedAction {
    type: PhotoActionTypes.FETCH_PHOTOS_FAILED;
    payload: string;
}

export type PhotoAction = FetchPhotoAction | FetchPhotoSuccessAction | FetchPhotoFailedAction;

