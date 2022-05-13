import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as PhotoActionCreators from '../store/action-creators/photoThunk';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(PhotoActionCreators, dispatch)
}