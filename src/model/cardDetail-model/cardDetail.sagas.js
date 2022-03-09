import {call, put, takeLatest} from 'redux-saga/effects';
import {sendNetworkFail} from '../actions';
import { getCardDetail } from '../api';
import { CARDDETAIL,  cardDetailSuccess, cardDetailFail } from './cardDetail.actions';

export function* watchCardDetail() {
  yield takeLatest(CARDDETAIL, handleCardDetail);
}

function* handleCardDetail(action) {
  const response = yield call(getCardDetail, action.payload);
  console.log(response,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  let code = null
  if (response.data != null){
    code = response.status;
  }
  if(code == 200){
    yield put(cardDetailSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR' && response.problem !== 'SERVER_ERROR') {
      var message = response.problem;
      if (response.data != null){
         message = response.data.message;
     }
      yield put(cardDetailFail(message));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(cardDetailFail(response.problem));
    }
  }
}