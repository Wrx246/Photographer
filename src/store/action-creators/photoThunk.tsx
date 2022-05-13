import { Dispatch } from "redux"
import { accessKey } from "../../API/keys"
import { API } from "../../API/urlConfig"
import { DetailsAction, DetailsActionTypes } from "../../types/detailsActionTypes"
import { PhotoAction, PhotoActionTypes } from "../../types/photoActionTypes"



export const fetchPhotos = (page: number = 1, per_page: number = 20) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({ type: PhotoActionTypes.FETCH_PHOTOS })
            const response = await API
                .get(`photos?page=${page}&per_page=${per_page}&client_id=${accessKey}`)
            dispatch({ type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: PhotoActionTypes.FETCH_PHOTOS_FAILED,
                payload: 'Error'
            })
        }
    }
}

export const fetchPhotosDetail = (id: string) => {
    return async (dispatch: Dispatch<DetailsAction>) => {
        try {
            dispatch({ type: DetailsActionTypes.FETCH_DETAILS })
            const response = await API.get(`photos/${id}?client_id=${accessKey}`)
            dispatch({ type: DetailsActionTypes.FETCH_DETAILS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: DetailsActionTypes.FETCH_DETAILS_FAILED,
                payload: 'Error'
            })
        }
    }
}