import { DetailsAction, DetailsActionTypes } from "../../types/detailsActionTypes";
import { IState, PhotoAction, PhotoActionTypes } from "../../types/photoActionTypes";


const initialState: IState = {
    photos: [],
    details: [],
    loading: false,
    error: null,
}

export const photoReducer = (state = initialState, action: PhotoAction | DetailsAction): IState => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTOS:
            return { ...state, error: null, photos: [] }
        case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
            return { ...state, error: null, photos: action.payload }
        case PhotoActionTypes.FETCH_PHOTOS_FAILED:
            return { ...state, error: action.payload, photos: [] }


        case DetailsActionTypes.FETCH_DETAILS:
            return { ...state, error: null, details: [] }
        case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
            return { ...state, error: null, details: action.payload }
        case DetailsActionTypes.FETCH_DETAILS_FAILED:
            return { ...state, error: action.payload, details: [] }


        default:
            return state
    }
}