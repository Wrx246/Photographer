export enum DetailsActionTypes {
    FETCH_DETAILS = 'FETCH_DETAILS',
    FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS',
    FETCH_DETAILS_FAILED = 'FETCH_DETAILS_FAILED',
}

interface FetchDetailsAction {
    type: DetailsActionTypes.FETCH_DETAILS;
}
interface FetchDetailsSuccessAction {
    type: DetailsActionTypes.FETCH_DETAILS_SUCCESS;
    payload: any[];
}
interface FetchDetailsFailedAction {
    type: DetailsActionTypes.FETCH_DETAILS_FAILED;
    payload: string;
}

export type DetailsAction = FetchDetailsAction | FetchDetailsSuccessAction | FetchDetailsFailedAction;