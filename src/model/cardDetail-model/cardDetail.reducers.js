import { CARDDETAIL,CARDDETAIL_FAIL,CARDDETAIL_SUCCESS} from './cardDetail.actions';
 const initialState = {
  isLoading: false,
  cardData: null, 
  err: null
};

export const cardDetailReducer = (state = initialState, action)  => {
  switch (action.type) {
    case CARDDETAIL:
      return {
        isLoading: true,
        cardData: null,
        err: null,
      };
    case CARDDETAIL_SUCCESS:
      return  {
        isLoading: false,
        cardData: action.payload,
        err: null,
      };
    case CARDDETAIL_FAIL:
      return {
        isLoading: false,
        cardData: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};